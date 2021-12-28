import { openDb } from '../dataBase/dbConfig';

const create = async ({ quantidade, pedidoId, produtoId, compradorId }) => {
  const db = await openDb();
  const { lastID } = await db.run(
    `INSERT INTO historicoPedidos (quantidade, pedidoId, produtoId, compradorId)
    VALUES (?, ?, ?)`,
    [quantidade, pedidoId, produtoId, compradorId],
    (err) => {
      if (err) return {
        path: 'model historicoPedidos create',
        message: err,
      };
    }
  );

  return lastID;
};

const deleteByPedidoId = async (pedidoId) => {
  const db = await openDb();
  await db.run(
    `DELETE FROM historicoPedidos
    WHERE pedidoId = ?`,
    [pedidoId],
    (err) => {
      if (err) return {
        path: 'model historicoPedidos deleteByPedidoId',
        message: err,
      };
    }
  );
};

const getAllByPedidoId = async (pedidoId) => {
  const db = await openDb();
  const historico = await db.all(
    `SELECT * FROM historicoPedidos
    WHERE pedidoId = ?`,
    [pedidoId],
    (err) => {
      if (err) return {
        path: 'model historicoPedidos getAllByPedidoId',
        message: err,
      };
    }
  );

  return historico;
};

export default {
  create,
  deleteByPedidoId,
  getAllByPedidoId,
};
