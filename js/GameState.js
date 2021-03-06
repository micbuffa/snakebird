
/**
 * An empty cell
 * @type {number}
 */
const EMPTY = 0;
/**
 * A cell with an obstacle
 * @type {number}
 */
const OBSTACLE = -1;
/**
 * A cell with spikes
 * @type {number}
 */
const SPIKE = -2;
/**
 * A cell with a fruit
 * @type {number}
 */
const FRUIT = -3;
/**
 * A cell with a portal
 * @type {number}
 */
const PORTAL = -4;
/**
 * A cell with the target
 * @type {number}
 */
const TARGET = -5;

// snakes: values 1-26 (23)
// blocks: values 32-57 (54)

/**
 * Represents a cell with a snake
 * @param {number} snakeNum the number of the snake, starting with 0
 * @return {number} the number representing the snake
 */
function SNAKE(snakeNum) {
  return snakeNum + 1;
}

/**
 * Represents a cell with a block
 * @param {number} blockNum the number of the block, starting with 0
 * @return {number} the number representing the block
 */
function BLOCK(blockNum) {
  return blockNum + 32;
}

/**
 * Get the snake number from a cell value
 * @param {number} val the cell value
 * @return {number} the snake number
 */
function GET_SNAKE(val) {
  return val - 1;
}

/**
 * Get the block number from a cell value
 * @param {number} val the cell value
 * @return {number} the block number
 */
function GET_BLOCK(val) {
  return val - 32;
}

/**
 * Behavior of the getVal() method: for coordinates that are out of bounds, calculate the modulo of
 * the bounds and return the value at that position
 * @type {number}
 */
const WRAP_AROUND = 1;
/**
 * Behavior of the setVal() method: for coordinates that are out of bounds, throw an error
 * @type {number}
 */
const DEFAULT = 0;

/**
 * Behavior of the getVal() method: empty fields below the board, obstacles to the left and right
 * @param {number[]} gravity the gravity direction
 * @return {number} the corresponding constant
 */
function BLOCK_LEFT_RIGHT(gravity) {
  if (gravity[0] == 1) return 2;
  if (gravity[0] == -1) return 3;
  if (gravity[1] == 1) return 4;
  if (gravity[1] == -1) return 5;
}

/**
 * Represents a state in the Snakebird game
 */
class GameState {
  /**
   * Create a new GameState
   * @param {string} stateStr a string representing the current game state (more info: GameState.md)
   */
  constructor(stateStr) {
    /**
     * Contains the original state string that was passed in the consrtuctor
     * @type {string}
     */
    this.stateStr = '';
    if (typeof stateStr === 'string') this.stateStr = stateStr.replace(/\r?\n$/, '');
    /**
     * Contains the game state as an array of strings, each entry represents one horizontal line
     * of the field
     * @type {string[]}
     */
    this.lines = [''];
    if (typeof stateStr === 'string') this.lines = this.stateStr.split(/\r?\n/g);
    /**
     * Possibly contains the two portal positions
     * @type {number[][]}
     */
    this.portalPos = [];
    /**
     * Contains all the fruit positions
     * @type {number[][]}
     */
    this.fruitPos = [];
    /**
     * Contains the target position
     * @type {number[]}
     */
    this.target = [];
    /**
     * Contains the number of fruits
     * @type {number}
     */
    this.fruits = 0;
    /**
     * Whether or not the game has ended
     * @type {boolean}
     */
    this.gameEnded = false;
    /**
     * Whether or not the game was won
     * @type {boolean}
     */
    this.gameWon = false;
    /**
     * The direction of gravity
     * @type {number[]}
     */
    this.gravity = DOWN;
    if (typeof stateStr === 'string') {
      if (this.lines[0].search(/^[0-9]+ [0-9]+$/) != -1) {
        this.lines = this.lines.slice(1);
      }
      if (this.lines[this.lines.length - 1]
          .search(/^[0-9]+ [0-9]+ (won|lost|not over)(?: [0-9]+ [0-9]+ [0-9]+ [0-9]+)?$/) != -1) {
        const lastline = this.lines[this.lines.length - 1];
        this.lines = this.lines.slice(0, this.lines.length - 1);
        const res = /^([0-9]+) ([0-9]+) (won|lost|not over)(?: ([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+))?$/
          .exec(lastline);
        this.target = [parseInt(res[1]), parseInt(res[2])];
        if (res[3] != 'not over') {
          this.gameEnded = true;
          if (res[3] == 'won') this.gameWon = true;
        }
        if ((typeof res[4] === 'string') && res[4].length > 0) {
          this.portalPos.push([parseInt(res[4]), parseInt(res[5])]);
          this.portalPos.push([parseInt(res[6]), parseInt(res[7])]);
        }
      }
    }
    /**
     * The height of the field
     * @type {number}
     */
    this.height = this.lines.length;
    /**
     * The width of the field
     * @type {number}
     */
    this.width = this.lines[0].length;
    /**
     * Maps snake characters (A-U) to the corresponding index in the snakes array
     * @type {Map<string,number>}
     */
    this.snakeMap = new Map();
    /**
     * An array containing queues containing the position of the snakes' body parts
     * @type {Queue[]}
     */
    this.snakes = [];
    /**
     * An array containing the characters of the respective snakes
     * @type {string[]}
     */
    this.snakeToCharacter = [];
    /**
     * Maps block characters (a-u) to the corresponding index in the blocks array
     * @type {Map<string,number>}
     */
    this.blockMap = new Map();
    /**
     * An array containing queues containing the position of the blocks' parts
     * @type {Queue[]}
     */
    this.blocks = [];
    /**
     * An array containing the characters of the respective blocks
     * @type {string[]}
     */
    this.blockToCharacter = [];
    /**
     * An array representing the field (contains values such as EMPTY or SNAKE(i))
     * @type {number[][]}
     */
    this.field = [];
    /**
     * The sum of the (signed) x distances of all the snakes' heads to the target
     * @type {number}
     */
    this.targetXDistance = 0;
    if (typeof stateStr === 'string') {
      for (let x=0; x<this.width; x++) {
        this.field[x] = [];
        for (let y=0; y<this.height; y++) {
          this.field[x][y] = 0;
          const c = this.lines[y][x];
          if (c == 'X' || c == '$' || c == '?') { // target
            if (c != 'X') {
              this.gameEnded = true;
              if (c == '$') this.gameWon = true;
            }
            this.target = [x, y];
            this.field[x][y] = TARGET;
          } else if (c == '@') { // fruit
            this.fruits++;
            this.field[x][y] = FRUIT;
            this.fruitPos.push([x, y]);
          } else if (c == '#') { // obstacle
            this.field[x][y] = OBSTACLE;
          } else if (c == '|') { // spike
            this.field[x][y] = SPIKE;
          } else if (c == '.') { // empty
            this.field[x][y] = EMPTY;
          } else if (c == '*') { // portal
            if (this.portalPos.length < 2) this.portalPos.push([x, y]);
            this.field[x][y] = PORTAL;
          } else if (c == '<' || c == '>' || c == 'v' || c == '^') { // snake body
  
          } else if (c.search(/^[A-U]$/) != -1) { // snake head
            this.snakes.push(new Queue([[x, y]]));
            this.snakeMap.set(c, this.snakes.length - 1);
            this.snakeToCharacter.push(c);
            this.field[x][y] = SNAKE(this.snakeMap.get(c));
          } else if (c.search(/^[a-u]$/) != -1) { // block
            if (this.blockMap.has(c)) {
              this.blocks[this.blockMap.get(c)].pushBack([x, y]);
            } else {
              this.blocks.push(new Queue([[x, y]]));
              this.blockMap.set(c, this.blocks.length - 1);
              this.blockToCharacter.push(c);
            }
            this.field[x][y] = BLOCK(this.blockMap.get(c));
          } else {
            throw new Error(`Unexpected character ${c} at position (${x}, ${y})`);
          }
        }
      }
      if (this.target.length == 0) throw new Error('Target position not specified');
      if (this.fruits > 0) {
        if (this.field[this.target[0]][this.target[1]] == TARGET)
        this.field[this.target[0]][this.target[1]] = EMPTY;
      }
      for (let i=0; i<this.snakes.length; i++) {
        let [cx, cy] = this.snakes[i].getBack();
        this.targetXDistance += cx - this.target[0];
        while (true) {
          if (this.getStrVal(cx + 1, cy, WRAP_AROUND) == '<') {
            cx++; cx %= this.width; this.snakes[i].pushBack([cx, cy]);
            this.field[cx][cy] = SNAKE(i);
          } else if (this.getStrVal(cx - 1, cy, WRAP_AROUND) == '>') {
            cx--; cx += this.width; cx %= this.width; this.snakes[i].pushBack([cx, cy]);
            this.field[cx][cy] = SNAKE(i);
          } else if (this.getStrVal(cx, cy + 1, WRAP_AROUND) == '^') {
            cy++; cy %= this.height; this.snakes[i].pushBack([cx, cy]);
            this.field[cx][cy] = SNAKE(i);
          } else if (this.getStrVal(cx, cy - 1, WRAP_AROUND) == 'v') {
            cy--; cy += this.height; cy %= this.height; this.snakes[i].pushBack([cx, cy]);
            this.field[cx][cy] = SNAKE(i);
          } else {
            break;
          }
        }
      }
    }
  }

  /**
   * Clone this GameState object
   * @return {GameState} a new, identical GameState object
   */
  clone() {
    const ret = new GameState();
    ret.stateStr = this.stateStr;
    for (let i=0; i<this.lines.length; i++) ret.lines[i] = this.lines[i];
    for (let i=0; i<this.portalPos.length; i++)
      ret.portalPos[i] = [this.portalPos[i][0], this.portalPos[i][1]];
    for (let i=0; i<this.fruitPos.length; i++)
      ret.fruitPos[i] = [this.fruitPos[i][0], this.fruitPos[i][1]];
    ret.target = [this.target[0], this.target[1]];
    ret.fruits = this.fruits;
    ret.gameEnded = this.gameEnded;
    ret.gameWon = this.gameWon;
    ret.height = this.height;
    ret.width = this.width;
    ret.gravity = this.gravity;
    ret.targetXDistance = this.targetXDistance;
    for (let i=0; i<this.snakes.length; i++) {
      ret.snakes[i] = new Queue();
      for (let k=0; k<this.snakes[i].length; k++)
        ret.snakes[i].pushBack([this.snakes[i].get(k)[0], this.snakes[i].get(k)[1]]);
      ret.snakeToCharacter[i] = this.snakeToCharacter[i];
      ret.snakeMap.set(ret.snakeToCharacter[i], i);
    }
    for (let i=0; i<this.blocks.length; i++) {
      ret.blocks[i] = new Queue();
      for (let k=0; k<this.blocks[i].length; k++)
        ret.blocks[i].pushBack([this.blocks[i].get(k)[0], this.blocks[i].get(k)[1]]);
      ret.blockToCharacter[i] = this.blockToCharacter[i];
      ret.blockMap.set(ret.blockToCharacter[i], i);
    }
    for (let i=0; i<this.field.length; i++) {
      ret.field[i] = [];
      for (let k=0; k<this.field[i].length; k++)
        ret.field[i][k] = this.field[i][k];
    }
    return ret;
  }

  /**
   * Get the value at a specific position on the field
   * @param {number} x the x coordinate (from the top left corner)
   * @param {number} y the y coordinate (from the top left corner)
   * @param {number} [behavior] one of EMPTY, OBSTACLE, SPIKE, PORTAL, WRAP_AROUND - for
   * EMPTY, OBSTACLE, SPIKE, PORTAL the respective values will be returned when (x, y) is out
   * of bounds, for WRAP_AROUND see description of WRAP_AROUND
   * @return {number} the field value at the given position
   */
  getVal(x, y, behavior = EMPTY) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      if (behavior <= 0) return behavior;
      if (behavior >= 2) {
        if (behavior == 2) { // right
          if (x < 0 || y < 0 || y >= this.height) return OBSTACLE;
          else return EMPTY;
        } else if (behavior == 3) { // left
          if (x >= this.width || y < 0 || y >= this.height) return OBSTACLE;
          else return EMPTY;
        } else if (behavior == 4) { // down
          if (x < 0 || y < 0 || x >= this.width) return OBSTACLE;
          else return EMPTY;
        } else { // up
          if (x < 0 || y >= this.height || x >= this.width) return OBSTACLE;
          else return EMPTY;
        }
      }
      while (x < 0) x += this.width; while (y < 0) y += this.height;
      x %= this.width; y %= this.height;
    }
    return this.field[x][y];
  }

  /**
   * Get the value at a specific position on the field (read value from the string representation)
   * @param {number} x the x coordinate (from the top left corner)
   * @param {number} y the y coordinate (from the top left corner)
   * @param {number} [behavior] one of EMPTY, OBSTACLE, SPIKE, PORTAL, WRAP_AROUND - for
   * EMPTY, OBSTACLE, SPIKE, PORTAL the respective values will be returned when (x, y) is out
   * of bounds, for WRAP_AROUND see description of WRAP_AROUND
   * @return {string} the field value (from the string representation) at the given position
   */
  getStrVal(x, y, behavior = EMPTY) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      if (behavior <= 0) {
        if (behavior == EMPTY) return '.';
        if (behavior == OBSTACLE) return '#';
        if (behavior == SPIKE) return '|';
        return '*';
      }
      if (behavior >= 2) {
        if (behavior == 2) { // right
          if (x < 0 || y < 0 || y >= this.height) return '#';
          else return '.';
        } else if (behavior == 3) { // left
          if (x >= this.width || y < 0 || y >= this.height) return '#';
          else return '.';
        } else if (behavior == 4) { // down
          if (x < 0 || y < 0 || x >= this.width) return '#';
          else return '.';
        } else { // up
          if (x < 0 || y >= this.height || x >= this.width) return '#';
          else return '.';
        }
      }
      while (x < 0) x += this.width; while (y < 0) y += this.height;
      x %= this.width; y %= this.height;
    }
    return this.lines[y][x];
  }

  /**
   * Set the value of a cell in the field
   * @param {number} x the x coordinate (from the top left corner)
   * @param {number} y the y coordinate (from the top left corner)
   * @param {number} val the new value
   * @param {number} [behavior] one of WRAP_AROUND, DEFAULT
   */
  setVal(x, y, val, behavior = DEFAULT) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      if (behavior == DEFAULT) throw new Error(`setVal: indices (${x},${y}) are out of bounds`);
      while (x < 0) x += this.width; while (y < 0) y += this.height;
      x %= this.width; y %= this.height;
    }
    this.field[x][y] = val;
  }

  /**
   * Set the character value of a cell in the field
   * @param {number} x the x coordinate (from the top left corner)
   * @param {number} y the y coordinate (from the top left corner)
   * @param {string} val the new character value
   * @param {number} [behavior] one of WRAP_AROUND, DEFAULT
   */
  setStrVal(x, y, val, behavior = DEFAULT) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      if (behavior == DEFAULT) throw new Error(`setStrVal: indices (${x},${y}) are out of bounds`);
      while (x < 0) x += this.width; while (y < 0) y += this.height;
      x %= this.width; y %= this.height;
    }
    this.lines[y] = `${this.lines[y].substring(0, x)}${val}${this.lines[y].substring(x + 1, this.lines[y].length)}`;
  }

  /**
   * Returns a string representation of the game state (that could be passed to the constructor
   * to generate a new, identical game state)
   * @return {string} the string representation
   */
  toString() {
    let wStr = 'not over';
    if (this.gameEnded) {
      if (this.gameWon) wStr = 'won';
      else wStr = 'lost';
    }
    let portalStr = '';
    if (this.portalPos.length > 0) {
      portalStr += ` ${this.portalPos[0][0]} ${this.portalPos[0][1]}`;
      portalStr += ` ${this.portalPos[1][0]} ${this.portalPos[1][1]}`;
    }
    return `${this.height} ${this.width}\n${this.lines.join('\n')}\n`
      + `${this.target[0]} ${this.target[1]} ${wStr}${portalStr}`;
  }

  /**
   * Converts the internal representation of the state into a string for debugging purposes
   * @param {boolean} [fieldOnly] whether to only return the field string (if set to false,
   * the values of additional variables, such as gameEnded, will be printed as well)
   * @return {string} the string representation of the internal state
   */
  internalToString(fieldOnly = false) {
    let fStr = '';
    for (let y=0; y<this.height; y++) {
      for (let x=0; x<this.width; x++) {
        let add = this.field[x][y].toString();
        if (add.length == 1) add = ' ' + add;
        add = ' ' + add;
        fStr += add;
      }
      fStr += '\n';
    }
    if (fieldOnly) return fStr;
    let rStr = '';
    rStr += `gameEnded: ${this.gameEnded}, gameWon: ${this.gameWon}, fruits: ${this.fruits}\n`;
    rStr += `target: (${this.target[0]}, ${this.target[1]})`;
    if (this.portalPos.length > 0) {
      rStr += `, portalPos: (${this.portalPos[0][0]}, ${this.portalPos[0][1]})`;
      rStr += ` & (${this.portalPos[1][0]}, ${this.portalPos[1][1]})`;
    }
    rStr += `\n${fStr}`;
    return rStr;
  }
}
