const button = document.querySelector('.btn');
const output = document.querySelector('.output');
const text = 'Abai was born in Karauyl village in Chingiz volost of Semipalatinsk uyezd of the Russian Empire (this is now in Abay District of East Kazakhstan). He was the son of Qunanbai and Uljan, his fathers second wife. They named him Ibrahim, as the family was Muslim, and he stuck with the name for the first few years of his life. Ibrahim first studied at a local madrasah under Mullah Ahmed Ryza. During his early childhood years in Ryzas tutelage, he received the nickname “Abai” (which means “careful”), a nickname that stayed with him for the rest of his life. His father was wealthy enough to send Abai to a Russian secondary school in Semipalatinsk. There he read the writings of Mikhail Lermontov and Alexander Pushkin, which were influential to his own development as a writer. Moreover, he was fond of reading eastern poetry, including the Shahnameh and One Thousand and One Nights.';
let index = 0;

function typingEffect() {
    if (index < text.length) {
        output.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 30);
    }
}

button.addEventListener('click', () => {
    typingEffect();
    button.disabled = true;
});