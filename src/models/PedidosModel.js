import { openDb } from '../dataBase/dbConfig';

const create = async ({
  parcelas,
  compradorId,
  status,
}) => {
  const db = await openDb();
  const { lastID } = await db.run(
    `INSERT INTO pedidos (parcelas, compradorId, status)
    VALUES (?, ?, ?)`,
    [parcelas, compradorId, status],
    (err) => {
      if (err) return {
        path: 'model pedidos create',
        message: err,
      };
    }
  );
  return lastID;
};

const deleteById = async (id) => {
  const db = await openDb();
  await db.run(
    `DELETE FROM pedidos
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model pedidos delete',
        message: err,
      };
    }
  );
};

const updateById  = async (id, { parcelas, compradorId, status }) => {
  const db = await openDb();
  await db.run(
    `UPDATE pedidos
    SET
    parcelas = ?,
    compradorId = ?,
    status = ?
    WHERE id = ?`,
    [parcelas, compradorId, status, id],
    (err) => {
      if (err) return {
        path: 'model pedidos updateById',
        message: err,
      };
    }
  );
};

const getById = async (id) => {
  const db = await openDb();
  const pedido = await db.get(
    `SELECT * FROM pedidos
    WHERE id = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model pedidos getById',
        message: err,
      };
    }
  );

  return pedido;
}

const getByCompradorId = async (compradorId) => {
  const db = await openDb();
  const pedidos = await db.all(
    `SELECT * FROM pedidos
    WHERE compradorId = ?`,
    [id],
    (err) => {
      if (err) return {
        path: 'model pedidos getByCompradorId',
        message: err,
      };
    }
  );

  return pedidos;
};

const resumoPedido = async (pedidoId) => {
  const db = await openDb();
  const result = await db.get(
    `SELECT 
    c.nome AS cliente,
    c.email AS email,
    h.pedidoId AS pedido,
    (SELECT SUM (pr.preco * hs.quantidade) FROM historicoPedidos AS hs
		INNER JOIN produtos AS pr ON hs.produtoId = pr.id
		WHERE hs.pedidoId = ?) AS montante
    FROM clientes AS c
    INNER JOIN historicoPedidos AS h ON c.id = h.compradorId
    WHERE h.pedidoId = ?
    GROUP BY pedido`,
    [pedidoId, pedidoId],
    (err) => {
      if (err) return {
        path: 'model pedidos getByCompradorId',
        message: err,
      };
    }
  );

  return result;
};

const getAll = async () => {
  const db = await openDb();
  const pedidos = await db.all(
    `SELECT * FROM pedidos`
  );

  return pedidos;
}

export default {
  create,
  deleteById,
  updateById,
  getById,
  getByCompradorId,
  resumoPedido,
  getAll,
};