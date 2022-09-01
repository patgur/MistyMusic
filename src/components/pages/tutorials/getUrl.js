export default function getDefaultNormalizer(){
    let urlNumber = window.location.href.slice(-2)
    let lastUrlNumber = 22

    let test = +urlNumber
    if(+test <= lastUrlNumber)
    test = +urlNumber + 1

    console.log(test)
    return +test
}