"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "metas",
      [
        {
          semana: 3,
          cantidad_meta: 8,
          cantidad_cumplida: 10,
          mes: 6,
          usuario_id: 1,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 10,
          cantidad_meta: 16,
          cantidad_cumplida: 27,
          mes: 10,
          usuario_id: 2,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 2,
          cantidad_meta: 28,
          cantidad_cumplida: 26,
          mes: 4,
          usuario_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 6,
          cantidad_meta: 11,
          cantidad_cumplida: 10,
          mes: 10,
          usuario_id: 4,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 1,
          cantidad_meta: 13,
          cantidad_cumplida: 19,
          mes: 4,
          usuario_id: 5,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 10,
          cantidad_meta: 24,
          cantidad_cumplida: 8,
          mes: 7,
          usuario_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 8,
          cantidad_meta: 18,
          cantidad_cumplida: 26,
          mes: 10,
          usuario_id: 7,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 1,
          cantidad_meta: 30,
          cantidad_cumplida: 6,
          mes: 1,
          usuario_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 7,
          cantidad_meta: 13,
          cantidad_cumplida: 19,
          mes: 2,
          usuario_id: 9,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 6,
          cantidad_meta: 7,
          cantidad_cumplida: 23,
          mes: 1,
          usuario_id: 10,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 7,
          cantidad_meta: 21,
          cantidad_cumplida: 18,
          mes: 5,
          usuario_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 2,
          cantidad_meta: 12,
          cantidad_cumplida: 23,
          mes: 8,
          usuario_id: 12,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 10,
          cantidad_meta: 23,
          cantidad_cumplida: 19,
          mes: 9,
          usuario_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 1,
          cantidad_meta: 5,
          cantidad_cumplida: 15,
          mes: 4,
          usuario_id: 14,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          semana: 10,
          cantidad_meta: 23,
          cantidad_cumplida: 1,
          mes: 1,
          usuario_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("metas", null, {});
  },
};
