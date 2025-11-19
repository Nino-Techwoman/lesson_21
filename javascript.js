// 1

const titles1 = ["react", "javascript", "python", "java", "ruby", "css", "html", "golang"];
const titles1Result = titles1.filter((text) => text.length > 6 ).map((text) => text + " is cool").forEach((text) => console.log(text));

// 2

const titles2 = ["apple", "hello", "world", "javascript", "code", "education", "programming", "dog"];
const vowels = "aeiouAEIOU";  

const titles2Result = titles2.filter(function(text2){
    let count = 0;
    for (let i = 0; i < text2.length; i++) {
        if(vowels.includes(text2[i])) {
            count++;
        }
    }
    return count < 3
}).map(function(text2) {
  let count = 0;
  for (let i = 0; i < text2.length; i++) {
    if (vowels.includes(text2[i])) count++;
  }
  return `${text2} (${count} vowels)`;
});

console.log(titles2Result);


// 3 

const text = ["racecar", "hello", "level", "world", "madam", "javascript", "civic", "test"];


const palindromes = text.filter(text => {
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }
    return true;
});


palindromes.forEach(text => console.log(text));






  









