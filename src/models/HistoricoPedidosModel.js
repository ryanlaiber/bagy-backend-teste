import { openDb } from '../dataBase/dbConfig';

const create = async ({ quantidade, pedidoId, produtoId }) => {
  const db = await openDb();
  const { lastID } = await db.run(
    `INSERT INTO historicoPedidos (quantidade, pedidoId, produtoId)
    VALUES (?, ?, ?)`,
    [quantidade, pedidoId, produtoId],
    (err) => {
      if (err) return {
        path: 'model historicoPedidos create',
        message: err,
      };
    }
  );

  return lastID;
};



const exHistoricoPedido = {
  quantidade: 20,
  pedidoId: 1,
  produtoId: 2,
};

create(exHistoricoPedido);