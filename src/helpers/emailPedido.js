import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const pedidoEmail = ({ cliente, pedido, montante, email }, comprados) => {
  const usuario = process.env.EMAIL;
  const senha = process.env.EMAIL_SENHA;
  console.log(usuario, senha);

  let itens = '';
  
  comprados.forEach((e) => {
    itens = itens + `- ${e.nome}  ${e.quantidade} unidades  R$ ${e.preco}/unidade
    `
  });

  const text = `${cliente}, obrigado pelo pedido!
    Seu pedido de id ${pedido} com o valor total de R$ ${montante} foi realizado com sucesso.
    Itens comprados:
  ` + itens;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: usuario,
      pass: senha,
    },
  });
  
  const destinatario = email;

  const mailOptions = {
    from: usuario,
    to: destinatario,
    subject: 'Pedido realizado com sucesso!',
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    };
  });
};

export default pedidoEmail;
