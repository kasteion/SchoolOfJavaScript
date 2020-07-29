var subject = 'Kasteion'
var predicate = 'is learning JavaScript'

var subjectInUpperCase = subject.toUpperCase()
var subjectInLowerCase = subject.toLowerCase()
var subjectFirstCharacter = subject.charAt(0)
var subjectLength = subject.length
var sentence = subject + ' ' + predicate
var sentence2 = `${subject} ${predicate}`
var subjectSubstring = subject.substr(1,2)
var subjectLastCharacter = subject.charAt(subject.length - 1)

console.log(`Subject: ${subject}`)
console.log(`Predicate: ${predicate}`)
console.log(`Subject in UpperCase: ${subjectInUpperCase}`)
console.log(`Subject in LowerCase: ${subjectInLowerCase}`)
console.log(`Subject first character: ${subjectFirstCharacter}`)
console.log(`Subject length: ${subjectLength}`)
console.log(`Subject last character: ${subjectLastCharacter}`)
console.log(`Subject Substring: ${subjectSubstring}`)
console.log(`Sentence 1: ${sentence}`)
console.log(`Sentence 2: ${sentence2}`)