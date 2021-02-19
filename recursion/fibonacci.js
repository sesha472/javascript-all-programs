function fib(n) {
	if (n == 0 || n == 1) return 1;
	t=fib(n-1) + fib(n-2);
return t
}

console.log(fib(3));
