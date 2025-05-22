class QrGenerator{
  link;
  constructor()
  {
    this.link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
  }

  async Generate(text)
  {
    try
    {
      document.querySelector('.js-qr-image').src = this.link + text;
    }
    catch(error)
    {
      console.log(error.message);
    }
  }
}

const qrGen = new QrGenerator();

document.querySelector('.enter').addEventListener('click',()=>{
  const inputText = document.querySelector('js-input').value;
  qrGen.Generate(inputText);
});

document.querySelector('.js-input').addEventListener('keydown', (event)=>{
  if(event.key === 'Enter')
  {
    const inputText = document.querySelector('.js-input').value;
    qrGen.Generate(inputText);
  }
})