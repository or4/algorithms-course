import { convertToArray } from '../utils';

const raw =
`1 65
2 125
3 94
4 7
5 44
6 28
7 78
8 73
9 122
10 101
11 124
12 83
13 87
14 60
15 43
16 42
17 56
18 91
19 97
20 105
21 36
22 6
23 34
24 62
25 12
26 99
27 90
28 27
29 123
30 5
31 8
32 93
33 25
34 70
35 120
36 58
37 29
38 118
39 14
40 74
41 113
42 23
43 92
44 59
45 19
46 116
47 17
48 22
49 52
50 15
51 109
52 69
53 31
54 33
55 24
56 108
58 75
59 80
60 39
61 115
62 47
63 26
64 82
65 37
66 71
67 64
68 88
69 63
70 51
71 48
72 53
73 100
74 79
75 114
76 126
77 76
78 16
79 54
80 68
81 106
82 11
83 30
84 111
85 89
86 128
87 13
88 50
89 84
90 46
91 107
92 38
93 61
94 95
95 121
96 66
97 40
98 96
99 77
100 18
101 127
102 45
103 112
104 98
105 4
106 21
107 2
108 102
109 1
110 117
111 3
112 110
113 119
114 20
115 81
116 9
117 32
118 35
119 103
120 85
121 67
122 104
123 49
124 72
125 10
126 86
127 55
128 41`;

export const data = convertToArray(raw);

// result 61,46,15,3,2