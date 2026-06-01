let x = 10;
console.log(x); // 10

x += 5; // same as x = x + 5
console.log(x); // 15

x -= 5; // same as x = x - 5
console.log(x); // 10

x *= 5; // same as x = x * 5
console.log(x); // 50

x /= 5; // same as x = x / 5
console.log(x); // 10

x %= 5; // same as x = x % 5
console.log(x); // 0

x **= 5; // same as x = x ** 5
console.log(x); // 100000

/*Common Compound Assignment Operators 
1
 
2
Operator	Meaning	Example	Equivalent To
+=	Add and assign	x += y	x = x + y
-=	Subtract and assign	x -= y	x = x - y
*=	Multiply and assign	x *= y	x = x * y
/=	Divide and assign	x /= y	x = x / y
%=	Modulus and assign	x %= y	x = x % y
**=	Exponentiation and assign	x **= y	x = x ** y
&=	Bitwise AND and assign	x &= y	x = x & y
`	=`	Bitwise OR and assign	`x
^=	Bitwise XOR and assign	x ^= y	x = x ^ y
<<=	Left shift and assign	x <<= y	x = x << y
>>=	Signed right shift and assign	x >>= y	x = x >> y
>>>=	Unsigned right shift and assign	x >>>= y	x = x >>> y
&&=	Logical AND assignment	x &&= y	if (x) x = y;
`		=`	Logical OR assignment
??=	Nullish coalescing assignment	x ??= y	if (x == null) x = y;*/
