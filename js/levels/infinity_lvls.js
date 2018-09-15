const infinity_levels = [
{
  name: "Blocked Paths",
  fallThrough: true,
  board: `11 25
.........................
.........................
.........##..............
.........####............
..........##....#........
..........#...@.#........
...>>R....#.#...##...@...
..#######...##..#....#...
.######################..
.#########.#####.#####...
..########..###.X.####...
16 10 not over`
},

{
  name: "Split",
  fallThrough: true,
  board: `13 10
.....X....
..........
..........
..........
..........
.....|....
......#...
@#....@..#
..........
.......#>G
#......###
#|.....###
.......###
5 0 not over`
},

{
  name: "Double Vision",
  fallThrough: true,
  board: `11 28
......................X....|
...........................|
#..........##..............#
##.........###.............#
##........####..........|.##
##.......#####...........###
@#...v...##.@#...........##.
....R<.@.##........@.....##.
.#####..###..#####...|.|###.
###.##..#######.##......####
###..#..#######..#......####
22 0 not over`
},

{
  name: "Pothole",
  fallThrough: true,
  board: `10 12
............
............
......X.....
..>B........
..^@....@...
....|.......
....|####...
..#.##.###..
..###..###..
...#....##..
6 2 not over`
},

{
  name: "Secret Passage",
  fallThrough: true,
  board: `15 14
..............
..||||........
..|###....#...
..####.X..#...
.....#....#...
...@.#...v##..
.......R<<#...
....####.##...
.....###|#....
.......#.@.|..
.......#.##..#
.......#.##...
......##..#...
......###.....
......####....
7 3 not over`
},

{
  name: "The Pillar",
  fallThrough: true,
  board: `15 19
c.....*..||........
c.......dd.....##..
c.......##|........
####.#..*.|.......#
..........|........
.#........|.######.
..........|....|.||
...............|...
..#............|...
...............|..#
...........#.......
....R..........X...
....^....@.........
....^..............
....#.....|........
15 11 not over 8 3 6 0`
},

{
  name: "Gravity Maze",
  fallThrough: true,
  changeGravity: true,
  board: `14 14
...#...#.o.#..
.#.###.#.##|.#
.#...c.......n
.###.#.|.#.###
.....#...|..@#
.#|##|.#.#.#.#
.#...#.R<..|..
.|@#.#.#.#.###
.....aa@.e.#..
##.#.|##.#.#.#
...#.bb..#...m
.#|###.#.|.###
.........#....
##.#.#.###.#.#
6 10 not over`
}
];