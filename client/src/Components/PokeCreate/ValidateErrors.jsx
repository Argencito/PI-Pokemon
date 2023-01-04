export default function Validate(input) {
    let errors = {}
    let validateLetters = /^[a-zA-Z]+$/
    let validateDigits = /^[0-9]+$/
    let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/
  
    if(!input.name || !validateLetters.test(input.name))  errors.name = "Name with letters and no spaces";

    if(!input.img || !validateUrl.test(input.img)) errors.image = "URL type";

    if(!input.hp || input.hp < 0 || input.hp > 300 || !validateDigits.test(input.hp))  errors.hp = "between 1 - 300";

    if(!input.attack || input.attack < 0 || input.attack > 200 || !validateDigits.test(input.attack))  errors.attack = "between 1 - 200";

    if(!input.defense ||input.defense < 0 || input.defense > 300 || !validateDigits.test(input.defense))  errors.defense = "between 1 - 300";

    if(!input.speed || input.speed < 0 || input.speed > 200 || !validateDigits.test(input.speed))  errors.speed = "between 1 - 200";

    if(!input.height || input.height < 0 || input.height > 20 || !validateDigits.test(input.height))  errors.height = "between 1 - 20 m";

    if(!input.weight || input.weight < 0 || input.weight > 1000 || !validateDigits.test(input.weight))  errors.weight = "between  1 - 1000 kg";

    return errors;
}