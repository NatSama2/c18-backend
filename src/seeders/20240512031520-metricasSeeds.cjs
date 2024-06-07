"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "metricas",
      [
        {
          total_postulaciones: 12,
          total_entradas: 9,
          ofertas: 16,
          guardados: 8,
          usuario_id: 1,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 3,
          total_entradas: 19,
          ofertas: 4,
          guardados: 5,
          usuario_id: 2,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 3,
          total_entradas: 16,
          ofertas: 16,
          guardados: 5,
          usuario_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 1,
          total_entradas: 16,
          ofertas: 10,
          guardados: 18,
          usuario_id: 4,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 11,
          total_entradas: 2,
          ofertas: 13,
          guardados: 3,
          usuario_id: 5,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 9,
          total_entradas: 20,
          ofertas: 3,
          guardados: 13,
          usuario_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 13,
          total_entradas: 16,
          ofertas: 9,
          guardados: 12,
          usuario_id: 7,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 20,
          total_entradas: 3,
          ofertas: 18,
          guardados: 8,
          usuario_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 18,
          total_entradas: 4,
          ofertas: 13,
          guardados: 14,
          usuario_id: 9,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 2,
          total_entradas: 15,
          ofertas: 2,
          guardados: 5,
          usuario_id: 10,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 16,
          total_entradas: 2,
          ofertas: 4,
          guardados: 7,
          usuario_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 5,
          total_entradas: 10,
          ofertas: 15,
          guardados: 9,
          usuario_id: 12,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 2,
          total_entradas: 4,
          ofertas: 16,
          guardados: 11,
          usuario_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 18,
          total_entradas: 8,
          ofertas: 19,
          guardados: 5,
          usuario_id: 14,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          total_postulaciones: 3,
          total_entradas: 1,
          ofertas: 19,
          guardados: 3,
          usuario_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("metricas", null, {});
  },
};
