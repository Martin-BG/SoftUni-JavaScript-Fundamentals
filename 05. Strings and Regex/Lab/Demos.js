console.log('########################');
let str = '<img src="[imgSource]" />';
str = str.replace(/\[imgSource]/, './smiley.gif');
console.log(str);

console.log('########################');
str = 'Visit <link>http://fb.com</link> or <link>http://softuni.bg</link>.';
str = str.replace(/<link>(.*?)<\/link>/g, '<a href="$1">Link</a>');
console.log(str);
