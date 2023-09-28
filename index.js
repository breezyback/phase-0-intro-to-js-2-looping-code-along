const writeCards = (arr, event) => {
    const messages = [];
    
    arr.forEach(name => messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`));

    return messages;
};

const countDown = (nb) => {
    for (let i = nb; i >= 0; i--)
        console.log(i);
};