"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "empleos",
      [
        {
          id: 1,
          titulo: "Automation Specialist III",
          empresa: "Ozu",
          cargo: "Environmental Tech",
          url: "http://telegraph.co.uk/volutpat/quam.json",
          descripcion:
            "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
          ubicacion: "Sri Lanka",
          tipo_empleo: "Speech Pathologist",
          salario: 5780,
          registroEntrevista_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 2,
          titulo: "Internal Auditor",
          empresa: "Meembee",
          cargo: "Librarian",
          url: "https://furl.net/quam/sapien/varius/ut/blandit.html",
          descripcion:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
          ubicacion: "United States",
          tipo_empleo: "Database Administrator III",
          salario: 7045,
          registroEntrevista_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 3,
          titulo: "Software Engineer II",
          empresa: "Avamba",
          cargo: "Technical Writer",
          url: "https://npr.org/ipsum/primis/in/faucibus.html",
          descripcion: "Nulla mollis molestie lorem. Quisque ut erat.",
          ubicacion: "Cayman Islands",
          tipo_empleo: "Payment Adjustment Coordinator",
          salario: 3785,
          registroEntrevista_id: 5,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 4,
          titulo: "VP Accounting",
          empresa: "Kwinu",
          cargo: "Geologist I",
          url: "https://sogou.com/lectus/vestibulum/quam/sapien/varius.html",
          descripcion:
            "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
          ubicacion: "Canada",
          tipo_empleo: "Environmental Specialist",
          salario: 2680,
          registroEntrevista_id: 5,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 5,
          titulo: "Senior Quality Engineer",
          empresa: "Meejo",
          cargo: "Programmer IV",
          url: "http://clickbank.net/ac/nibh/fusce/lacus.aspx",
          descripcion:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          ubicacion: "Philippines",
          tipo_empleo: "Professor",
          salario: 3413,
          registroEntrevista_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 6,
          titulo: "Software Consultant",
          empresa: "Gabcube",
          cargo: "Help Desk Operator",
          url: "https://bravesites.com/nunc/viverra/dapibus.xml",
          descripcion:
            "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
          ubicacion: "Indonesia",
          tipo_empleo: "Product Engineer",
          salario: 2875,
          registroEntrevista_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 7,
          titulo: "Programmer Analyst III",
          empresa: "Voonyx",
          cargo: "Senior Cost Accountant",
          url: "https://dell.com/pellentesque/eget/nunc/donec/quis.aspx",
          descripcion:
            "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
          ubicacion: "Indonesia",
          tipo_empleo: "Administrative Assistant II",
          salario: 5218,
          registroEntrevista_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 8,
          titulo: "Chemical Engineer",
          empresa: "Tagopia",
          cargo: "Teacher",
          url: "http://newsvine.com/mauris.aspx",
          descripcion:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
          ubicacion: "China",
          tipo_empleo: "Senior Cost Accountant",
          salario: 5662,
          registroEntrevista_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 9,
          titulo: "Project Manager",
          empresa: "Kwilith",
          cargo: "Financial Analyst",
          url: "https://economist.com/felis.json",
          descripcion:
            "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
          ubicacion: "Russia",
          tipo_empleo: "Executive Secretary",
          salario: 9556,
          registroEntrevista_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 10,
          titulo: "Research Associate",
          empresa: "Skimia",
          cargo: "Software Engineer I",
          url: "https://delicious.com/quis/turpis/sed/ante/vivamus/tortor/duis.jsp",
          descripcion:
            "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
          ubicacion: "Ukraine",
          tipo_empleo: "Structural Engineer",
          salario: 6259,
          registroEntrevista_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 11,
          titulo: "Financial Advisor",
          empresa: "Oyonder",
          cargo: "Nurse Practicioner",
          url: "http://yellowbook.com/quis/turpis/sed/ante/vivamus/tortor/duis.json",
          descripcion:
            "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
          ubicacion: "South Africa",
          tipo_empleo: "Design Engineer",
          salario: 5638,
          registroEntrevista_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 12,
          titulo: "Human Resources Manager",
          empresa: "Kazu",
          cargo: "Mechanical Systems Engineer",
          url: "https://google.cn/enim/blandit/mi/in/porttitor/pede/justo.json",
          descripcion:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
          ubicacion: "Philippines",
          tipo_empleo: "Environmental Tech",
          salario: 4084,
          registroEntrevista_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 13,
          titulo: "Desktop Support Technician",
          empresa: "Livefish",
          cargo: "Executive Secretary",
          url: "https://163.com/id/luctus/nec/molestie/sed/justo/pellentesque.html",
          descripcion:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
          ubicacion: "Sri Lanka",
          tipo_empleo: "Safety Technician II",
          salario: 9595,
          registroEntrevista_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 14,
          titulo: "Sales Representative",
          empresa: "Wordpedia",
          cargo: "Junior Executive",
          url: "https://cbsnews.com/amet.json",
          descripcion: "Vestibulum rutrum rutrum neque.",
          ubicacion: "China",
          tipo_empleo: "Sales Associate",
          salario: 5855,
          registroEntrevista_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 15,
          titulo: "Administrative Officer",
          empresa: "Mudo",
          cargo: "Environmental Tech",
          url: "https://goo.ne.jp/leo/odio/porttitor/id/consequat.xml",
          descripcion:
            "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          ubicacion: "Russia",
          tipo_empleo: "Senior Financial Analyst",
          salario: 8574,
          registroEntrevista_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 16,
          titulo: "Dental Hygienist",
          empresa: "Camimbo",
          cargo: "Programmer III",
          url: "https://examiner.com/consequat/morbi/a/ipsum/integer.jpg",
          descripcion:
            "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          ubicacion: "Argentina",
          tipo_empleo: "Information Systems Manager",
          salario: 3840,
          registroEntrevista_id: 6,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 17,
          titulo: "Environmental Tech",
          empresa: "Yadel",
          cargo: "Operator",
          url: "http://gizmodo.com/ipsum/dolor/sit/amet/consectetuer/adipiscing/elit.xml",
          descripcion: "Suspendisse potenti.",
          ubicacion: "China",
          tipo_empleo: "Pharmacist",
          salario: 6513,
          registroEntrevista_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 18,
          titulo: "Staff Accountant III",
          empresa: "Yamia",
          cargo: "Environmental Specialist",
          url: "https://smugmug.com/sed/lacus/morbi.js",
          descripcion: "Pellentesque viverra pede ac diam.",
          ubicacion: "French Polynesia",
          tipo_empleo: "Data Coordinator",
          salario: 7347,
          registroEntrevista_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 19,
          titulo: "Accountant II",
          empresa: "Riffwire",
          cargo: "Developer IV",
          url: "https://t-online.de/vel/ipsum/praesent.aspx",
          descripcion:
            "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          ubicacion: "Peru",
          tipo_empleo: "Marketing Assistant",
          salario: 7383,
          registroEntrevista_id: 7,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 20,
          titulo: "Assistant Professor",
          empresa: "Brainbox",
          cargo: "Nurse",
          url: "https://dmoz.org/sit/amet/turpis/elementum/ligula/vehicula/consequat.jsp",
          descripcion:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
          ubicacion: "Guatemala",
          tipo_empleo: "Cost Accountant",
          salario: 7947,
          registroEntrevista_id: 14,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 21,
          titulo: "Account Coordinator",
          empresa: "Zoomlounge",
          cargo: "Desktop Support Technician",
          url: "https://geocities.com/lorem/integer/tincidunt/ante/vel/ipsum.xml",
          descripcion:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
          ubicacion: "South Africa",
          tipo_empleo: "Junior Executive",
          salario: 9031,
          registroEntrevista_id: 11,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 22,
          titulo: "Assistant Manager",
          empresa: "Ainyx",
          cargo: "Community Outreach Specialist",
          url: "http://jalbum.net/eu/est.jsp",
          descripcion: "In congue. Etiam justo. Etiam pretium iaculis justo.",
          ubicacion: "Mexico",
          tipo_empleo: "Physical Therapy Assistant",
          salario: 8424,
          registroEntrevista_id: 10,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 23,
          titulo: "Software Engineer II",
          empresa: "Fivechat",
          cargo: "Librarian",
          url: "https://ifeng.com/lorem.jpg",
          descripcion: "In sagittis dui vel nisl. Duis ac nibh.",
          ubicacion: "China",
          tipo_empleo: "Structural Engineer",
          salario: 3821,
          registroEntrevista_id: 5,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 24,
          titulo: "Librarian",
          empresa: "Linkbridge",
          cargo: "Assistant Professor",
          url: "http://themeforest.net/suspendisse/potenti/cras/in/purus.html",
          descripcion:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
          ubicacion: "Yemen",
          tipo_empleo: "Research Assistant IV",
          salario: 4804,
          registroEntrevista_id: 3,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 25,
          titulo: "Community Outreach Specialist",
          empresa: "Divape",
          cargo: "Compensation Analyst",
          url: "http://360.cn/ante/ipsum/primis/in/faucibus.html",
          descripcion:
            "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          ubicacion: "Czech Republic",
          tipo_empleo: "Community Outreach Specialist",
          salario: 6291,
          registroEntrevista_id: 12,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 26,
          titulo: "Health Coach II",
          empresa: "Meetz",
          cargo: "Computer Systems Analyst I",
          url: "http://theatlantic.com/dolor/quis/odio/consequat/varius/integer.jsp",
          descripcion:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
          ubicacion: "Russia",
          tipo_empleo: "Human Resources Assistant I",
          salario: 5389,
          registroEntrevista_id: 10,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 27,
          titulo: "Financial Analyst",
          empresa: "Dynazzy",
          cargo: "Computer Systems Analyst IV",
          url: "http://a8.net/nisl/ut/volutpat/sapien/arcu/sed.xml",
          descripcion: "Nullam porttitor lacus at turpis.",
          ubicacion: "Philippines",
          tipo_empleo: "VP Product Management",
          salario: 1277,
          registroEntrevista_id: 7,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 28,
          titulo: "Desktop Support Technician",
          empresa: "Yakijo",
          cargo: "Geological Engineer",
          url: "https://surveymonkey.com/ornare/consequat/lectus.jpg",
          descripcion: "Vestibulum rutrum rutrum neque.",
          ubicacion: "China",
          tipo_empleo: "Actuary",
          salario: 7188,
          registroEntrevista_id: 12,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 29,
          titulo: "VP Quality Control",
          empresa: "Fadeo",
          cargo: "Administrative Assistant IV",
          url: "https://constantcontact.com/dolor/quis/odio/consequat/varius.aspx",
          descripcion:
            "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          ubicacion: "Norway",
          tipo_empleo: "Assistant Manager",
          salario: 7064,
          registroEntrevista_id: 13,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 30,
          titulo: "Legal Assistant",
          empresa: "Babblestorm",
          cargo: "Executive Secretary",
          url: "http://theguardian.com/nulla.html",
          descripcion: "Etiam faucibus cursus urna. Ut tellus.",
          ubicacion: "Brazil",
          tipo_empleo: "Executive Secretary",
          salario: 6499,
          registroEntrevista_id: 14,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 31,
          titulo: "Accounting Assistant III",
          empresa: "Youfeed",
          cargo: "Systems Administrator IV",
          url: "https://drupal.org/turpis/sed/ante.json",
          descripcion:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
          ubicacion: "Portugal",
          tipo_empleo: "Senior Cost Accountant",
          salario: 3651,
          registroEntrevista_id: 10,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 32,
          titulo: "Geologist IV",
          empresa: "Devbug",
          cargo: "Pharmacist",
          url: "http://meetup.com/leo/maecenas.xml",
          descripcion:
            "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
          ubicacion: "Philippines",
          tipo_empleo: "Information Systems Manager",
          salario: 2155,
          registroEntrevista_id: 1,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 33,
          titulo: "Geological Engineer",
          empresa: "Realcube",
          cargo: "Internal Auditor",
          url: "http://apple.com/quis/libero/nullam/sit.xml",
          descripcion:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          ubicacion: "China",
          tipo_empleo: "Assistant Media Planner",
          salario: 1266,
          registroEntrevista_id: 9,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 34,
          titulo: "Recruiting Manager",
          empresa: "Jabberstorm",
          cargo: "Engineer I",
          url: "https://printfriendly.com/magnis.jpg",
          descripcion:
            "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
          ubicacion: "Russia",
          tipo_empleo: "Health Coach IV",
          salario: 3946,
          registroEntrevista_id: 4,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 35,
          titulo: "Desktop Support Technician",
          empresa: "Geba",
          cargo: "Librarian",
          url: "https://timesonline.co.uk/in.json",
          descripcion:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          ubicacion: "Japan",
          tipo_empleo: "Statistician IV",
          salario: 5680,
          registroEntrevista_id: 5,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 36,
          titulo: "Assistant Manager",
          empresa: "Yakitri",
          cargo: "Research Assistant II",
          url: "https://fda.gov/pellentesque/ultrices.html",
          descripcion: "Morbi quis tortor id nulla ultrices aliquet.",
          ubicacion: "Niger",
          tipo_empleo: "Teacher",
          salario: 2648,
          registroEntrevista_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 37,
          titulo: "Research Assistant II",
          empresa: "Dabjam",
          cargo: "General Manager",
          url: "https://gravatar.com/elit/ac/nulla/sed/vel/enim/sit.json",
          descripcion: "Mauris lacinia sapien quis libero.",
          ubicacion: "Mexico",
          tipo_empleo: "Software Engineer III",
          salario: 4159,
          registroEntrevista_id: 15,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 38,
          titulo: "Help Desk Technician",
          empresa: "Realcube",
          cargo: "General Manager",
          url: "https://rediff.com/viverra/pede.png",
          descripcion:
            "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
          ubicacion: "Czech Republic",
          tipo_empleo: "Physical Therapy Assistant",
          salario: 2941,
          registroEntrevista_id: 4,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 39,
          titulo: "Database Administrator II",
          empresa: "Yamia",
          cargo: "Director of Sales",
          url: "http://shareasale.com/donec/ut/mauris/eget/massa/tempor/convallis.aspx",
          descripcion: "Maecenas pulvinar lobortis est.",
          ubicacion: "Indonesia",
          tipo_empleo: "Director of Sales",
          salario: 1840,
          registroEntrevista_id: 14,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
        {
          id: 40,
          titulo: "Analog Circuit Design manager",
          empresa: "Realblab",
          cargo: "Administrative Officer",
          url: "https://timesonline.co.uk/vitae.jsp",
          descripcion:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
          ubicacion: "Laos",
          tipo_empleo: "Systems Administrator IV",
          salario: 8764,
          registroEntrevista_id: 8,
          createdAt: "2024-05-11",
          updatedAt: "2024-05-11",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("empleos", null, {});
  },
};
