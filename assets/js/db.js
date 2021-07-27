(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Nome || client.Nome.indexOf(filter.Nome) > -1)
                    && (filter.Age === undefined || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;


    db.countries = [
        { Nome: "", Id: 0 },
        { Nome: "United States", Id: 1 },
        { Nome: "Canada", Id: 2 },
        { Nome: "United Kingdom", Id: 3 },
        { Nome: "France", Id: 4 },
        { Nome: "Brazil", Id: 5 },
        { Nome: "China", Id: 6 },
        { Nome: "Russia", Id: 7 }
    ];

    db.clients = [
        {
            "Nome": "Otto Clay",
            "Age": 61,
            "Country": 6,
            "Address": "Ap #897-1459 Quam Avenue",
            "Married": false
        },
        {
            "Nome": "Connor Johnston",
            "Age": 73,
            "Country": 7,
            "Address": "Ap #370-4647 Dis Av.",
            "Married": false
        },
        {
            "Nome": "Lacey Hess",
            "Age": 29,
            "Country": 7,
            "Address": "Ap #365-8835 Integer St.",
            "Married": false
        },
        {
            "Nome": "Timothy Henson",
            "Age": 78,
            "Country": 1,
            "Address": "911-5143 Luctus Ave",
            "Married": false
        },
        {
            "Nome": "Ramona Benton",
            "Age": 43,
            "Country": 5,
            "Address": "Ap #614-689 Vehicula Street",
            "Married": true
        },
        {
            "Nome": "Ezra Tillman",
            "Age": 51,
            "Country": 1,
            "Address": "P.O. Box 738, 7583 Quisque St.",
            "Married": true
        },
        {
            "Nome": "Dante Carter",
            "Age": 59,
            "Country": 1,
            "Address": "P.O. Box 976, 6316 Lorem, St.",
            "Married": false
        },
        {
            "Nome": "Christopher Mcclure",
            "Age": 58,
            "Country": 1,
            "Address": "847-4303 Dictum Av.",
            "Married": true
        },
        {
            "Nome": "Ruby Rocha",
            "Age": 62,
            "Country": 2,
            "Address": "5212 Sagittis Ave",
            "Married": false
        },
        {
            "Nome": "Imelda Hardin",
            "Age": 39,
            "Country": 5,
            "Address": "719-7009 Auctor Av.",
            "Married": false
        },
        {
            "Nome": "Jonah Johns",
            "Age": 28,
            "Country": 5,
            "Address": "P.O. Box 939, 9310 A Ave",
            "Married": false
        },
        {
            "Nome": "Herman Rosa",
            "Age": 49,
            "Country": 7,
            "Address": "718-7162 Molestie Av.",
            "Married": true
        },
        {
            "Nome": "Arthur Gay",
            "Age": 20,
            "Country": 7,
            "Address": "5497 Neque Street",
            "Married": false
        },
        {
            "Nome": "Xena Wilkerson",
            "Age": 63,
            "Country": 1,
            "Address": "Ap #303-6974 Proin Street",
            "Married": true
        },
        {
            "Nome": "Lilah Atkins",
            "Age": 33,
            "Country": 5,
            "Address": "622-8602 Gravida Ave",
            "Married": true
        },
        {
            "Nome": "Malik Shepard",
            "Age": 59,
            "Country": 1,
            "Address": "967-5176 Tincidunt Av.",
            "Married": false
        },
        {
            "Nome": "Keely Silva",
            "Age": 24,
            "Country": 1,
            "Address": "P.O. Box 153, 8995 Praesent Ave",
            "Married": false
        },
        {
            "Nome": "Hunter Pate",
            "Age": 73,
            "Country": 7,
            "Address": "P.O. Box 771, 7599 Ante, Road",
            "Married": false
        },
        {
            "Nome": "Mikayla Roach",
            "Age": 55,
            "Country": 5,
            "Address": "Ap #438-9886 Donec Rd.",
            "Married": true
        },
        {
            "Nome": "Upton Joseph",
            "Age": 48,
            "Country": 4,
            "Address": "Ap #896-7592 Habitant St.",
            "Married": true
        },
        {
            "Nome": "Jeanette Pate",
            "Age": 59,
            "Country": 2,
            "Address": "P.O. Box 177, 7584 Amet, St.",
            "Married": false
        },
        {
            "Nome": "Kaden Hernandez",
            "Age": 79,
            "Country": 3,
            "Address": "366 Ut St.",
            "Married": true
        },
        {
            "Nome": "Kenyon Stevens",
            "Age": 20,
            "Country": 3,
            "Address": "P.O. Box 704, 4580 Gravida Rd.",
            "Married": false
        },
        {
            "Nome": "Jerome Harper",
            "Age": 31,
            "Country": 5,
            "Address": "2464 Porttitor Road",
            "Married": false
        },
        {
            "Nome": "Jelani Patel",
            "Age": 36,
            "Country": 2,
            "Address": "P.O. Box 541, 5805 Nec Av.",
            "Married": true
        },
        {
            "Nome": "Keaton Oconnor",
            "Age": 21,
            "Country": 1,
            "Address": "Ap #657-1093 Nec, Street",
            "Married": false
        },
        {
            "Nome": "Bree Johnston",
            "Age": 31,
            "Country": 2,
            "Address": "372-5942 Vulputate Avenue",
            "Married": false
        },
        {
            "Nome": "Maisie Hodges",
            "Age": 70,
            "Country": 7,
            "Address": "P.O. Box 445, 3880 Odio, Rd.",
            "Married": false
        },
        {
            "Nome": "Kuame Calhoun",
            "Age": 39,
            "Country": 2,
            "Address": "P.O. Box 609, 4105 Rutrum St.",
            "Married": true
        },
        {
            "Nome": "Carlos Cameron",
            "Age": 38,
            "Country": 5,
            "Address": "Ap #215-5386 A, Avenue",
            "Married": false
        },
        {
            "Nome": "Fulton Parsons",
            "Age": 25,
            "Country": 7,
            "Address": "P.O. Box 523, 3705 Sed Rd.",
            "Married": false
        },
        {
            "Nome": "Wallace Christian",
            "Age": 43,
            "Country": 3,
            "Address": "416-8816 Mauris Avenue",
            "Married": true
        },
        {
            "Nome": "Caryn Maldonado",
            "Age": 40,
            "Country": 1,
            "Address": "108-282 Nonummy Ave",
            "Married": false
        },
        {
            "Nome": "Whilemina Frank",
            "Age": 20,
            "Country": 7,
            "Address": "P.O. Box 681, 3938 Egestas. Av.",
            "Married": true
        },
        {
            "Nome": "Emery Moon",
            "Age": 41,
            "Country": 4,
            "Address": "Ap #717-8556 Non Road",
            "Married": true
        },
        {
            "Nome": "Price Watkins",
            "Age": 35,
            "Country": 4,
            "Address": "832-7810 Nunc Rd.",
            "Married": false
        },
        {
            "Nome": "Lydia Castillo",
            "Age": 59,
            "Country": 7,
            "Address": "5280 Placerat, Ave",
            "Married": true
        },
        {
            "Nome": "Lawrence Conway",
            "Age": 53,
            "Country": 1,
            "Address": "Ap #452-2808 Imperdiet St.",
            "Married": false
        },
        {
            "Nome": "Kalia Nicholson",
            "Age": 67,
            "Country": 5,
            "Address": "P.O. Box 871, 3023 Tellus Road",
            "Married": true
        },
        {
            "Nome": "Brielle Baxter",
            "Age": 45,
            "Country": 3,
            "Address": "Ap #822-9526 Ut, Road",
            "Married": true
        },
        {
            "Nome": "Valentine Brady",
            "Age": 72,
            "Country": 7,
            "Address": "8014 Enim. Road",
            "Married": true
        },
        {
            "Nome": "Rebecca Gardner",
            "Age": 57,
            "Country": 4,
            "Address": "8655 Arcu. Road",
            "Married": true
        },
        {
            "Nome": "Vladimir Tate",
            "Age": 26,
            "Country": 1,
            "Address": "130-1291 Non, Rd.",
            "Married": true
        },
        {
            "Nome": "Vernon Hays",
            "Age": 56,
            "Country": 4,
            "Address": "964-5552 In Rd.",
            "Married": true
        },
        {
            "Nome": "Allegra Hull",
            "Age": 22,
            "Country": 4,
            "Address": "245-8891 Donec St.",
            "Married": true
        },
        {
            "Nome": "Hu Hendrix",
            "Age": 65,
            "Country": 7,
            "Address": "428-5404 Tempus Ave",
            "Married": true
        },
        {
            "Nome": "Kenyon Battle",
            "Age": 32,
            "Country": 2,
            "Address": "921-6804 Lectus St.",
            "Married": false
        },
        {
            "Nome": "Gloria Nielsen",
            "Age": 24,
            "Country": 4,
            "Address": "Ap #275-4345 Lorem, Street",
            "Married": true
        },
        {
            "Nome": "Illiana Kidd",
            "Age": 59,
            "Country": 2,
            "Address": "7618 Lacus. Av.",
            "Married": false
        },
        {
            "Nome": "Adria Todd",
            "Age": 68,
            "Country": 6,
            "Address": "1889 Tincidunt Road",
            "Married": false
        },
        {
            "Nome": "Kirsten Mayo",
            "Age": 71,
            "Country": 1,
            "Address": "100-8640 Orci, Avenue",
            "Married": false
        },
        {
            "Nome": "Willa Hobbs",
            "Age": 60,
            "Country": 6,
            "Address": "P.O. Box 323, 158 Tristique St.",
            "Married": false
        },
        {
            "Nome": "Alexis Clements",
            "Age": 69,
            "Country": 5,
            "Address": "P.O. Box 176, 5107 Proin Rd.",
            "Married": false
        },
        {
            "Nome": "Akeem Conrad",
            "Age": 60,
            "Country": 2,
            "Address": "282-495 Sed Ave",
            "Married": true
        },
        {
            "Nome": "Montana Silva",
            "Age": 79,
            "Country": 6,
            "Address": "P.O. Box 120, 9766 Consectetuer St.",
            "Married": false
        },
        {
            "Nome": "Kaseem Hensley",
            "Age": 77,
            "Country": 6,
            "Address": "Ap #510-8903 Mauris. Av.",
            "Married": true
        },
        {
            "Nome": "Christopher Morton",
            "Age": 35,
            "Country": 5,
            "Address": "P.O. Box 234, 3651 Sodales Avenue",
            "Married": false
        },
        {
            "Nome": "Wade Fernandez",
            "Age": 49,
            "Country": 6,
            "Address": "740-5059 Dolor. Road",
            "Married": true
        },
        {
            "Nome": "Illiana Kirby",
            "Age": 31,
            "Country": 2,
            "Address": "527-3553 Mi Ave",
            "Married": false
        },
        {
            "Nome": "Kimberley Hurley",
            "Age": 65,
            "Country": 5,
            "Address": "P.O. Box 637, 9915 Dictum St.",
            "Married": false
        },
        {
            "Nome": "Arthur Olsen",
            "Age": 74,
            "Country": 5,
            "Address": "887-5080 Eget St.",
            "Married": false
        },
        {
            "Nome": "Brody Potts",
            "Age": 59,
            "Country": 2,
            "Address": "Ap #577-7690 Sem Road",
            "Married": false
        },
        {
            "Nome": "Dillon Ford",
            "Age": 60,
            "Country": 1,
            "Address": "Ap #885-9289 A, Av.",
            "Married": true
        },
        {
            "Nome": "Hannah Juarez",
            "Age": 61,
            "Country": 2,
            "Address": "4744 Sapien, Rd.",
            "Married": true
        },
        {
            "Nome": "Vincent Shaffer",
            "Age": 25,
            "Country": 2,
            "Address": "9203 Nunc St.",
            "Married": true
        },
        {
            "Nome": "George Holt",
            "Age": 27,
            "Country": 6,
            "Address": "4162 Cras Rd.",
            "Married": false
        },
        {
            "Nome": "Tobias Bartlett",
            "Age": 74,
            "Country": 4,
            "Address": "792-6145 Mauris St.",
            "Married": true
        },
        {
            "Nome": "Xavier Hooper",
            "Age": 35,
            "Country": 1,
            "Address": "879-5026 Interdum. Rd.",
            "Married": false
        },
        {
            "Nome": "Declan Dorsey",
            "Age": 31,
            "Country": 2,
            "Address": "Ap #926-4171 Aenean Road",
            "Married": true
        },
        {
            "Nome": "Clementine Tran",
            "Age": 43,
            "Country": 4,
            "Address": "P.O. Box 176, 9865 Eu Rd.",
            "Married": true
        },
        {
            "Nome": "Pamela Moody",
            "Age": 55,
            "Country": 6,
            "Address": "622-6233 Luctus Rd.",
            "Married": true
        },
        {
            "Nome": "Julie Leon",
            "Age": 43,
            "Country": 6,
            "Address": "Ap #915-6782 Sem Av.",
            "Married": true
        },
        {
            "Nome": "Shana Nolan",
            "Age": 79,
            "Country": 5,
            "Address": "P.O. Box 603, 899 Eu St.",
            "Married": false
        },
        {
            "Nome": "Vaughan Moody",
            "Age": 37,
            "Country": 5,
            "Address": "880 Erat Rd.",
            "Married": false
        },
        {
            "Nome": "Randall Reeves",
            "Age": 44,
            "Country": 3,
            "Address": "1819 Non Street",
            "Married": false
        },
        {
            "Nome": "Dominic Raymond",
            "Age": 68,
            "Country": 1,
            "Address": "Ap #689-4874 Nisi Rd.",
            "Married": true
        },
        {
            "Nome": "Lev Pugh",
            "Age": 69,
            "Country": 5,
            "Address": "Ap #433-6844 Auctor Avenue",
            "Married": true
        },
        {
            "Nome": "Desiree Hughes",
            "Age": 80,
            "Country": 4,
            "Address": "605-6645 Fermentum Avenue",
            "Married": true
        },
        {
            "Nome": "Idona Oneill",
            "Age": 23,
            "Country": 7,
            "Address": "751-8148 Aliquam Avenue",
            "Married": true
        },
        {
            "Nome": "Lani Mayo",
            "Age": 76,
            "Country": 1,
            "Address": "635-2704 Tristique St.",
            "Married": true
        },
        {
            "Nome": "Cathleen Bonner",
            "Age": 40,
            "Country": 1,
            "Address": "916-2910 Dolor Av.",
            "Married": false
        },
        {
            "Nome": "Sydney Murray",
            "Age": 44,
            "Country": 5,
            "Address": "835-2330 Fringilla St.",
            "Married": false
        },
        {
            "Nome": "Brenna Rodriguez",
            "Age": 77,
            "Country": 6,
            "Address": "3687 Imperdiet Av.",
            "Married": true
        },
        {
            "Nome": "Alfreda Mcdaniel",
            "Age": 38,
            "Country": 7,
            "Address": "745-8221 Aliquet Rd.",
            "Married": true
        },
        {
            "Nome": "Zachery Atkins",
            "Age": 30,
            "Country": 1,
            "Address": "549-2208 Auctor. Road",
            "Married": true
        },
        {
            "Nome": "Amelia Rich",
            "Age": 56,
            "Country": 4,
            "Address": "P.O. Box 734, 4717 Nunc Rd.",
            "Married": false
        },
        {
            "Nome": "Kiayada Witt",
            "Age": 62,
            "Country": 3,
            "Address": "Ap #735-3421 Malesuada Avenue",
            "Married": false
        },
        {
            "Nome": "Lysandra Pierce",
            "Age": 36,
            "Country": 1,
            "Address": "Ap #146-2835 Curabitur St.",
            "Married": true
        },
        {
            "Nome": "Cara Rios",
            "Age": 58,
            "Country": 4,
            "Address": "Ap #562-7811 Quam. Ave",
            "Married": true
        },
        {
            "Nome": "Austin Andrews",
            "Age": 55,
            "Country": 7,
            "Address": "P.O. Box 274, 5505 Sociis Rd.",
            "Married": false
        },
        {
            "Nome": "Lillian Peterson",
            "Age": 39,
            "Country": 2,
            "Address": "6212 A Avenue",
            "Married": false
        },
        {
            "Nome": "Adria Beach",
            "Age": 29,
            "Country": 2,
            "Address": "P.O. Box 183, 2717 Nunc Avenue",
            "Married": true
        },
        {
            "Nome": "Oleg Durham",
            "Age": 80,
            "Country": 4,
            "Address": "931-3208 Nunc Rd.",
            "Married": false
        },
        {
            "Nome": "Casey Reese",
            "Age": 60,
            "Country": 4,
            "Address": "383-3675 Ultrices, St.",
            "Married": false
        },
        {
            "Nome": "Kane Burnett",
            "Age": 80,
            "Country": 1,
            "Address": "759-8212 Dolor. Ave",
            "Married": false
        },
        {
            "Nome": "Stewart Wilson",
            "Age": 46,
            "Country": 7,
            "Address": "718-7845 Sagittis. Av.",
            "Married": false
        },
        {
            "Nome": "Charity Holcomb",
            "Age": 31,
            "Country": 6,
            "Address": "641-7892 Enim. Ave",
            "Married": false
        },
        {
            "Nome": "Kyra Cummings",
            "Age": 43,
            "Country": 4,
            "Address": "P.O. Box 702, 6621 Mus. Av.",
            "Married": false
        },
        {
            "Nome": "Stuart Wallace",
            "Age": 25,
            "Country": 7,
            "Address": "648-4990 Sed Rd.",
            "Married": true
        },
        {
            "Nome": "Carter Clarke",
            "Age": 59,
            "Country": 6,
            "Address": "Ap #547-2921 A Street",
            "Married": false
        }
    ];

    db.users = [
        {
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Nome": "Carson Kelley",
            "RegisterDate": "2002-04-20T22:55:52-07:00"
        },
        {
            "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
            "Nome": "Prescott Griffin",
            "RegisterDate": "2011-02-22T05:59:55-08:00"
        },
        {
            "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
            "Nome": "Amir Saunders",
            "RegisterDate": "2014-08-13T09:17:49-07:00"
        },
        {
            "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
            "Nome": "Derek Thornton",
            "RegisterDate": "2012-02-27T01:31:07-08:00"
        },
        {
            "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
            "Nome": "Fletcher Romero",
            "RegisterDate": "2010-06-25T15:49:54-07:00"
        },
        {
            "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
            "Nome": "Thaddeus Stein",
            "RegisterDate": "2013-11-10T07:29:41-08:00"
        },
        {
            "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
            "Nome": "Nash Knapp",
            "RegisterDate": "2005-06-24T09:11:19-07:00"
        },
        {
            "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
            "Nome": "Quamar Vega",
            "RegisterDate": "2011-04-13T20:06:29-07:00"
        },
        {
            "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
            "Nome": "Philip Galloway",
            "RegisterDate": "2008-08-21T18:59:38-07:00"
        },
        {
            "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
            "Nome": "Mason French",
            "RegisterDate": "2000-11-15T00:38:37-08:00"
        },
        {
            "Account": "5911F201-818A-B393-5888-13157CE0D63F",
            "Nome": "Ross Cortez",
            "RegisterDate": "2010-05-27T17:35:32-07:00"
        },
        {
            "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
            "Nome": "Logan King",
            "RegisterDate": "2003-07-08T16:58:06-07:00"
        },
        {
            "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
            "Nome": "Cedric Leblanc",
            "RegisterDate": "2011-06-30T14:30:10-07:00"
        },
        {
            "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
            "Nome": "Simon Sullivan",
            "RegisterDate": "2013-06-11T16:35:07-07:00"
        },
        {
            "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
            "Nome": "Jamal West",
            "RegisterDate": "2001-03-16T20:18:29-08:00"
        },
        {
            "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
            "Nome": "Hector Morales",
            "RegisterDate": "2012-11-01T01:56:34-07:00"
        },
        {
            "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
            "Nome": "Herrod Hart",
            "RegisterDate": "2008-03-13T19:21:04-07:00"
        },
        {
            "Account": "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
            "Nome": "Clark Maxwell",
            "RegisterDate": "2004-08-05T08:22:24-07:00"
        },
        {
            "Account": "EA78F076-4F6E-4228-268C-1F51272498AE",
            "Nome": "Reuben Walter",
            "RegisterDate": "2011-01-23T01:55:59-08:00"
        },
        {
            "Account": "6A88C194-EA21-426F-4FE2-F2AE33F51793",
            "Nome": "Ira Ingram",
            "RegisterDate": "2008-08-15T05:57:46-07:00"
        },
        {
            "Account": "4275E873-439C-AD26-56B3-8715E336508E",
            "Nome": "Damian Morrow",
            "RegisterDate": "2015-09-13T01:50:55-07:00"
        },
        {
            "Account": "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
            "Nome": "Macon Farrell",
            "RegisterDate": "2011-03-14T05:41:40-07:00"
        },
        {
            "Account": "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
            "Nome": "Joel Galloway",
            "RegisterDate": "2003-02-03T04:19:01-08:00"
        },
        {
            "Account": "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
            "Nome": "Rigel Horton",
            "RegisterDate": "2015-06-20T11:53:11-07:00"
        },
        {
            "Account": "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
            "Nome": "Sylvester Gaines",
            "RegisterDate": "2004-03-12T09:57:13-08:00"
        },
        {
            "Account": "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
            "Nome": "Abbot Mckay",
            "RegisterDate": "2008-12-26T20:42:57-08:00"
        },
        {
            "Account": "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
            "Nome": "Solomon Green",
            "RegisterDate": "2013-09-04T01:44:47-07:00"
        }
     ];

}());