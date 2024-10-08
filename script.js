function firstWord(s) {
  // your code here
	s = s.trimStart();
	let i = 0;
	while(i < s.length && s[i].charCodeAt() !== ' '.charCodeAt()){
		i++;
	}
	return s.substr(0, i);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
