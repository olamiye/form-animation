const labels = document.querySelectorAll('.form-control label')

labels.forEach( label =>{
    label.innerHTML = label.innerText //This how the original array of Email looks like ['EMAIL']
        .split('')//This get the innerText of the label and turns the string to an array ['E', 'M', 'A' 'I', 'L']
        .map((letter, idx) => `<span>${letter}</span>` )// This maps over the array and creates a new version of the array, 
        //but with spans attached to each of those letter in the array  
        //['<span>E<span>', '<span>M</span>', '<span>A</span>' '<span>I'</span>, '<span>L</span>']
        .join('') //This basically joins all the span items in the array together
})
