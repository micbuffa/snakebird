
const stdMoveSamplesExternal = [

[
`4 4
....
....
X.G<
##.#
0 2 not over`,

`4 4
....
....
XG<.
##.#
0 2 not over`,

`4 4
....
....
$...
##.#
0 2 won`
],

[
`4 4
....
....
X.G<
#..#
0 2 not over`,

`4 4
....
....
?...
#..#
0 2 lost`
],

[
`4 4
..X.
....
..R@
####
2 0 not over`,

`4 4
..X.
....
..>R
####
2 0 not over`,

`4 4
..X.
...R
...^
####
2 0 not over`,

`4 4
..X.
....
..R<
####
2 0 not over`,

`4 4
..X.
..R.
..^.
####
2 0 not over`,

`4 4
..$.
....
....
####
2 0 won`
],

[
`4 7
.......
..B....
.>^|..X
#######
6 2 not over`,

`4 7
.......
..>B...
..^|..X
#######
6 2 not over`,

`4 7
.......
.......
...|..?
#######
6 2 lost`
],

[
`4 7
.......
..B....
>>^|..X
#######
6 2 not over`,

`4 7
.......
..>B...
.>^|..X
#######
6 2 not over`,

`4 7
.......
..>>B..
..^|..X
#######
6 2 not over`,

`4 7
.......
..>>v..
...|B.X
#######
6 2 not over`,

`4 7
.......
...>v..
...|>BX
#######
6 2 not over`,

`4 7
.......
.......
...|..$
#######
6 2 won`
],

[
`4 5
.>R..
##...
##.X.
##...
3 2 not over`,

`4 5
.....
##...
##.$.
##...
3 2 won`
],

[
`4 5
.>R..
##...
##|X.
##...
3 2 not over`,

`4 5
.....
##...
##|?.
##...
3 2 lost`
]

];

const stdMoveSamplesInternal = [

[
`gameEnded: false, gameWon: false, fruits: 0
target: (0, 2)
  0  0  0  0
  0  0  0  0
 -5  0  1  1
 -1 -1  0 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (0, 2)
  0  0  0  0
  0  0  0  0
 -5  1  1  0
 -1 -1  0 -1
`,

`gameEnded: true, gameWon: true, fruits: 0
target: (0, 2)
  0  0  0  0
  0  0  0  0
 -5  0  0  0
 -1 -1  0 -1
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (0, 2)
  0  0  0  0
  0  0  0  0
 -5  0  1  1
 -1  0  0 -1
`,

`gameEnded: true, gameWon: false, fruits: 0
target: (0, 2)
  0  0  0  0
  0  0  0  0
 -5  0  0  0
 -1  0  0 -1
`
],

[
`gameEnded: false, gameWon: false, fruits: 1
target: (2, 0)
  0  0  0  0
  0  0  0  0
  0  0  1 -3
 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 0)
  0  0 -5  0
  0  0  0  0
  0  0  1  1
 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 0)
  0  0 -5  0
  0  0  0  1
  0  0  0  1
 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 0)
  0  0 -5  0
  0  0  0  0
  0  0  1  1
 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 0)
  0  0 -5  0
  0  0  1  0
  0  0  1  0
 -1 -1 -1 -1
`,

`gameEnded: true, gameWon: true, fruits: 0
target: (2, 0)
  0  0 -5  0
  0  0  0  0
  0  0  0  0
 -1 -1 -1 -1
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  1  0  0  0  0
  0  1  1 -2  0  0 -5
 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  1  1  0  0  0
  0  0  1 -2  0  0 -5
 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: true, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  0  0  0  0  0
  0  0  0 -2  0  0 -5
 -1 -1 -1 -1 -1 -1 -1
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  1  0  0  0  0
  1  1  1 -2  0  0 -5
 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  1  1  0  0  0
  0  1  1 -2  0  0 -5
 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  1  1  1  0  0
  0  0  1 -2  0  0 -5
 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  1  1  1  0  0
  0  0  0 -2  1  0 -5
 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  0  1  1  0  0
  0  0  0 -2  1  1 -5
 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: true, gameWon: true, fruits: 0
target: (6, 2)
  0  0  0  0  0  0  0
  0  0  0  0  0  0  0
  0  0  0 -2  0  0 -5
 -1 -1 -1 -1 -1 -1 -1
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (3, 2)
  0  1  1  0  0
 -1 -1  0  0  0
 -1 -1  0 -5  0
 -1 -1  0  0  0
`,

`gameEnded: true, gameWon: true, fruits: 0
target: (3, 2)
  0  0  0  0  0
 -1 -1  0  0  0
 -1 -1  0 -5  0
 -1 -1  0  0  0
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (3, 2)
  0  1  1  0  0
 -1 -1  0  0  0
 -1 -1 -2 -5  0
 -1 -1  0  0  0
`,

`gameEnded: true, gameWon: false, fruits: 0
target: (3, 2)
  0  0  0  0  0
 -1 -1  0  0  0
 -1 -1 -2 -5  0
 -1 -1  0  0  0
`
]

];

const stdMoveSamplesRetVal = [

[
'[false,0,[[[3,2]],[[2,2]]]]',
'[false,0,[[[2,2]],[[1,2]]]]',
'[false,1,[[[1,2]],[[0,2,2]]]]'
],

[
'[false,0,[[[3,2]],[[2,2]]]]',
'[false,-2,[[[2,2]],[[1,2]],[[1,3]],[[1,4,1]]]]'
],

[
'[false,0,[[[1,2]],[[2,2]]]]',
'[true,0,[[[2,2]],[[3,2]]]]',
'[false,0,[[[3,2]],[[3,1]]]]',
'[false,0,[[[3,1]],[[2,1]],[[2,2]]]]',
'[false,0,[[[2,2]],[[2,1]]]]',
'[false,1,[[[2,1]],[[2,0,2]]]]'
],

[
'[false,0,[[[2,2]],[[2,1]]]]',
'[false,0,[[[2,1]],[[3,1]]]]',
'[false,-2,[[[3,1]],[[4,1]],[[4,2,1]]]]'
],

[
'[false,0,[[[2,2]],[[2,1]]]]',
'[false,0,[[[2,1]],[[3,1]]]]',
'[false,0,[[[3,1]],[[4,1]]]]',
'[false,0,[[[4,1]],[[4,2]]]]',
'[false,0,[[[4,2]],[[5,2]]]]',
'[false,1,[[[5,2]],[[6,2,2]]]]'
],

[
'[false,0,[[[1,0]],[[2,0]]]]',
'[false,1,[[[2,0]],[[3,0]],[[3,1]],[[3,2,2]]]]'
],

[
'[false,0,[[[1,0]],[[2,0]]]]',
'[false,-2,[[[2,0]],[[3,0]],[[3,1]],[[3,2,1]]]]'
]

];

const specialMoveSamplesExternal = [

[
`10 11
....X......
...........
...........
...........
...........
..>>Rbb....
..##.bbaa..
..##.#.aa..
..##...##..
..#######..
4 0 not over`,

`10 11
....X......
...........
...........
...........
...........
...>>R.....
..##..bbaa.
..##.#bbaa.
..##...##..
..#######..
4 0 not over`,

`10 11
....X......
...........
...........
...........
...........
....>v.....
..##.Rbbaa.
..##.#bbaa.
..##...##..
..#######..
4 0 not over`,

`10 11
....X......
...........
...........
...........
...........
.....v.....
..##.>Rbb..
..##.#.bb..
..##...##..
..#######..
4 0 not over`,

`10 11
....X......
...........
...........
...........
...........
...........
..##.>>Rbb.
..##.#..bb.
..##...##..
..#######..
4 0 not over`
],

[
`10 12
............
............
.........#..
....#....#..
..X.#...aR<.
....#...###.
....*B<.#.#.
.######||...
..#..#......
............
2 4 not over 4 6 9 4`,

`10 12
............
............
.........#..
....#....#..
..X.#...R<..
....#...###.
....*B<a#.#.
.######||...
..#..#......
............
2 4 not over 4 6 9 4`
],

[
`10 12
.........*..
.....*......
..X..a......
..G<........
...a...a....
D<..>A......
b...^a...B<.
b....R.v..^.
b...>^.C.>^.
############
2 2 not over 5 1 9 0`,

`10 12
.........*..
.....*...a..
..X.........
.......a...a
............
D<..>A...a..
b...^R...B<.
b....^.v..^.
b....^.C.>^.
############
2 2 not over 5 1 9 0`
],

[
`10 12
............
............
..X.........
............
............
............
............
............
.>>R......*.
############
2 2 not over 3 8 10 8`,

`10 12
............
............
..X.........
............
............
............
............
...R........
..>^......*.
############
2 2 not over 3 8 10 8`,

`10 12
............
............
..X.........
............
............
............
...R........
...^........
...^......*.
############
2 2 not over 3 8 10 8`,

`10 12
............
............
..X.........
............
............
............
..........R.
..........^.
...*......^.
############
2 2 not over 3 8 10 8`
],

[
`10 12
............
............
..........*.
............
............
............
.......B....
.....v<^....
.....>R^<<<*
############
7 8 not over 10 2 11 8`,

`10 12
............
............
..........*.
............
............
............
.......B....
.......^....
.......^<<<*
############
7 8 not over 10 2 11 8`
]

];
  
const specialMoveSamplesInternal = [

[
`gameEnded: false, gameWon: false, fruits: 0
target: (4, 0)
  0  0  0  0 -5  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  1  1  1 32 32  0  0  0  0
  0  0 -1 -1  0 32 32 33 33  0  0
  0  0 -1 -1  0 -1  0 33 33  0  0
  0  0 -1 -1  0  0  0 -1 -1  0  0
  0  0 -1 -1 -1 -1 -1 -1 -1  0  0
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (4, 0)
  0  0  0  0 -5  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  1  1  1  0  0  0  0  0
  0  0 -1 -1  0  0 32 32 33 33  0
  0  0 -1 -1  0 -1 32 32 33 33  0
  0  0 -1 -1  0  0  0 -1 -1  0  0
  0  0 -1 -1 -1 -1 -1 -1 -1  0  0
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (4, 0)
  0  0  0  0 -5  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  1  1  0  0  0  0  0
  0  0 -1 -1  0  1 32 32 33 33  0
  0  0 -1 -1  0 -1 32 32 33 33  0
  0  0 -1 -1  0  0  0 -1 -1  0  0
  0  0 -1 -1 -1 -1 -1 -1 -1  0  0
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (4, 0)
  0  0  0  0 -5  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  1  0  0  0  0  0
  0  0 -1 -1  0  1  1 32 32  0  0
  0  0 -1 -1  0 -1  0 32 32  0  0
  0  0 -1 -1  0  0  0 -1 -1  0  0
  0  0 -1 -1 -1 -1 -1 -1 -1  0  0
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (4, 0)
  0  0  0  0 -5  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0
  0  0 -1 -1  0  1  1  1 32 32  0
  0  0 -1 -1  0 -1  0  0 32 32  0
  0  0 -1 -1  0  0  0 -1 -1  0  0
  0  0 -1 -1 -1 -1 -1 -1 -1  0  0
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (2, 4), portalPos: (4, 6) & (9, 4)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0 -1  0  0
  0  0  0  0 -1  0  0  0  0 -1  0  0
  0  0 -5  0 -1  0  0  0 32  2  2  0
  0  0  0  0 -1  0  0  0 -1 -1 -1  0
  0  0  0  0 -4  1  1  0 -1  0 -1  0
  0 -1 -1 -1 -1 -1 -1 -2 -2  0  0  0
  0  0 -1  0  0 -1  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 4), portalPos: (4, 6) & (9, 4)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0 -1  0  0
  0  0  0  0 -1  0  0  0  0 -1  0  0
  0  0 -5  0 -1  0  0  0  2  2  0  0
  0  0  0  0 -1  0  0  0 -1 -1 -1  0
  0  0  0  0 -4  1  1 32 -1  0 -1  0
  0 -1 -1 -1 -1 -1 -1 -2 -2  0  0  0
  0  0 -1  0  0 -1  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2), portalPos: (5, 1) & (9, 0)
  0  0  0  0  0  0  0  0  0 -4  0  0
  0  0  0  0  0 -4  0  0  0  0  0  0
  0  0 -5  0  0 33  0  0  0  0  0  0
  0  0  2  2  0  0  0  0  0  0  0  0
  0  0  0 33  0  0  0 33  0  0  0  0
  1  1  0  0  4  4  0  0  0  0  0  0
 32  0  0  0  4 33  0  0  0  3  3  0
 32  0  0  0  0  5  0  6  0  0  3  0
 32  0  0  0  5  5  0  6  0  3  3  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2), portalPos: (5, 1) & (9, 0)
  0  0  0  0  0  0  0  0  0 -4  0  0
  0  0  0  0  0 -4  0  0  0 33  0  0
  0  0 -5  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0 33  0  0  0 33
  0  0  0  0  0  0  0  0  0  0  0  0
  1  1  0  0  3  3  0  0  0 33  0  0
 32  0  0  0  3  4  0  0  0  2  2  0
 32  0  0  0  0  4  0  5  0  0  2  0
 32  0  0  0  0  4  0  5  0  2  2  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2), portalPos: (3, 8) & (10, 8)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0 -5  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  1  1  1  0  0  0  0  0  0 -4  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2), portalPos: (3, 8) & (10, 8)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0 -5  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  1  0  0  0  0  0  0  0  0
  0  0  1  1  0  0  0  0  0  0 -4  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2), portalPos: (3, 8) & (10, 8)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0 -5  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  1  0  0  0  0  0  0  0  0
  0  0  0  1  0  0  0  0  0  0  0  0
  0  0  0  1  0  0  0  0  0  0 -4  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2), portalPos: (3, 8) & (10, 8)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0 -5  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  1  0
  0  0  0  0  0  0  0  0  0  0  1  0
  0  0  0 -4  0  0  0  0  0  0  1  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`
],

[
`gameEnded: false, gameWon: false, fruits: 0
target: (7, 8), portalPos: (10, 2) & (11, 8)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0 -4  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  2  0  0  0  0
  0  0  0  0  0  1  1  2  0  0  0  0
  0  0  0  0  0  1  1  2  2  2  2 -4
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`,

`gameEnded: false, gameWon: false, fruits: 0
target: (7, 8), portalPos: (10, 2) & (11, 8)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0 -4  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  1  0  0  0  0
  0  0  0  0  0  0  0  1  0  0  0  0
  0  0  0  0  0  0  0  1  1  1  1 -4
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`
]

];
  
const specialMoveSamplesRetVal = [

[
'[false,0,[[[3,5],[4,5],[7,6]],[[4,5],[5,5],[7,6]]]]',
'[false,0,[[[4,5],[5,5],[7,6]],[[5,5],[6,5],[8,6]],[[5,5],[6,6],[8,6]]]]',
'[false,0,[[[5,5],[6,6],[8,6]],[[5,6],[6,6],[8,6]]]]',
'[false,0,[[[5,6],[6,6],[8,6]],[[6,6],[7,6],[9,6]],[[6,6],[7,6],[9,7]],[[6,6],[7,6],[9,8]],[[6,6],[7,6],[9,9,1]]]]',
'[false,0,[[[6,6],[7,6]],[[7,6],[8,6]]]]'
],

[
'[false,0,[[[5,5],[5,6],[8,4]],[[5,5],[4,6,9,4,0,1],[8,4]],[[5,6],[9,4],[8,4]]]]',
'[false,0,[[[5,6],[9,4],[8,4]],[[5,6],[8,4],[7,4]],[[5,6],[8,4],[7,5]],[[5,6],[8,4],[7,6]]]]'
],

[
'[false,0,[[[0,1],[2,4],[5,2],[5,6],[5,8],[7,8],[0,6],[3,5]],[[0,1],[2,3],[5,1,9,0,0,1],[5,5],[5,7],[7,8],[0,6],[3,4]],[[0,2],[2,3],[9,1],[5,5],[5,7],[7,8],[0,6],[3,4]],[[0,3],[2,3],[9,2],[5,5],[5,7],[7,8],[0,6],[3,4]],[[0,4],[2,3],[9,3],[5,5],[5,7],[7,8],[0,6],[3,4]],[[0,5],[2,3],[9,4],[5,5],[5,7],[7,8],[0,6],[3,4]],[[0,5],[2,3],[9,5],[5,5],[5,7],[7,8],[0,6],[3,4]],[[0,5],[2,3],[9,6],[5,5],[5,7],[7,8],[0,6],[3,4]]]]',
'[false,0,[[[0,5],[2,3],[9,6],[5,5],[5,7],[7,8],[0,6],[3,4]],[[0,5],[2,2,2],[9,6],[5,4],[5,6],[7,8],[0,6],[3,3,7,2,0,1]],[[0,5],[9,6],[5,5],[5,6],[7,8],[0,6],[7,3]]]]'
],

[
'[false,0,[[[9,8]],[[10,8,3,8,1,0]]]]',
'[false,0,[[[3,8]],[[3,7]]]]',
'[false,0,[[[3,7]],[[3,6]]]]',
'[false,0,[[[3,6]],[[3,5]],[[3,6,10,6,0,1]]]]'
],

[
'[true,0,[[[5,3],[7,6]],[[6,3],[7,6]],[[6,4],[7,6]],[[6,5],[7,6]],[[6,6],[7,6]],[[6,7],[7,6]],[[6,8],[7,6]]]]',
'[false,0,[[[6,8],[7,6]],[[7,8,2],[8,6,7,0,1,0]],[[7,1]],[[7,2]],[[7,3]],[[7,4]],[[7,5]],[[7,6]]]]'
]

];

const specialBlockingMoveSamplesSol = [

[

`10 12
............
............
..X.........
............
............
............
............
..v<<<......
..BR<^......
############
2 2 not over`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0 -5  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  1  1  1  1  0  0  0  0  0  0
  0  0  1  2  2  1  0  0  0  0  0  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`,

'[false,0,[[[3,8],[4,8]],[[2,8],[3,8]]]]'

],

[

`10 12
............
............
..X.........
............
............
............
............
....v<<.....
....BR^.....
############
2 2 not over`,

`gameEnded: false, gameWon: false, fruits: 0
target: (2, 2)
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0 -5  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  0  0  0  0  0  0  0  0
  0  0  0  0  1  1  1  0  0  0  0  0
  0  0  0  0  1  2  1  0  0  0  0  0
 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
`,

'[false,0,[[[3,8],[4,8]],[[4,8],[5,8]]]]'

]

];
