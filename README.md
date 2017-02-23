|Requirement|input|output|
|-----------|:---:|:----:|
|Convert 1 to I|1|I|
|Convert 2 to II|2|II|
|Convert 3 to III|3|III|
|Convert 4 to IV|4|IV|
|Convert 5 to V|5|V|
|Convert 6,7,8 by subtracting 5 and converting again|6, 7, 8| V 1, V 2, V 3|
|Convert 9 to IX|9|IX|
|Subtract as you convert |8|V, 3|
|Subtract as you convert |15|X, 5|
|Convert 10 to X|10|X|
|Convert 20 to XX|20|XX|
|Convert 30 to XXX|30|XXX|
|Convert 40 to XL|40|XL|
|Convert 50 to L|50|L|
|Convert 60,70,80 by subtracting 50 and converting again|60, 70, 80| L 10, L 20, L 30|
|Convert 90 to XC|90|XC|
|Convert 100 to C|100|C|
|Convert 200 to CC|200|CC|
|Convert 300 to CCC|300|CCC|
|Convert 400 to CD|400|CD|
|Convert 500 to D|500|D|
|Convert 600,700,800 by subtracting 500 and converting again|600, 700, 800| D 100, D 200, D 300|
|Convert 900 to CM|900|CM|
|Convert 1,000 to M|1,000|M|
|Convert 2,000 to MM|2,000|MM|
|Convert 3,000 to MMM|3,000|MMM|
|Test the magnitude of the number and call the converter for that magnitue|230|call the hundreds converter|
|Test the magnitude of the number and call the converter for that magnitue|3200|call the thousands converter|
|Convert the largest digit and then call the converter for the smaller digit|3,200| MMM, call the hundreds converter on 200|
|Test the magnitude of the number and call the converter for that magnitue|3| III call the ones converter|
|Test the magnitude of the number and call the converter for that magnitue|70| LXX call the tens converter|
