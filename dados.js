// Dados extraídos do Colégio Qi — Ciclo de Matrículas 2027
const DADOS = [
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Freguesia",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Tarde",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Metropolitano",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 51214,
    "mensalidade": 4097,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 51214,
    "mensalidade": 4097,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Recreio",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 58125,
    "mensalidade": 4673,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Tarde",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 63059,
    "mensalidade": 5085,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 63059,
    "mensalidade": 5085,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Rio 2",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 70504,
    "mensalidade": 5705,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Tarde",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Tijuca",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "1º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "2º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "3º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "4º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF1",
    "serie": "5º Ano",
    "turno": "Manhã",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "biling_mensalidade": 885
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "6º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "7º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "8º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EF2",
    "serie": "9º Ano",
    "turno": "Manhã",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EM",
    "serie": "1ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EM",
    "serie": "2ª Série",
    "turno": "Manhã",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "biling_mensalidade": null
  },
  {
    "unidade": "Valqueire",
    "segmento": "EM",
    "serie": "3ª Série",
    "turno": "Manhã",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "biling_mensalidade": null
  }
];

const REGRAS = {
  "prazos": [
    {
      "id": "p1",
      "label": "Até 30/09",
      "anuidade_desc": 0.1,
      "material_avista_desc": 0.1,
      "material_bo": 11,
      "material_cc": 12,
      "cota_bo": 6,
      "cota_cc": 12,
      "cota_obs": "Preço da 1ª cota SEM reajuste (valor 2026)"
    },
    {
      "id": "p2",
      "label": "Até 31/10",
      "anuidade_desc": 0.08,
      "material_avista_desc": 0.08,
      "material_bo": 10,
      "material_cc": 12,
      "cota_bo": 5,
      "cota_cc": 12,
      "cota_obs": "Sem desconto"
    },
    {
      "id": "p3",
      "label": "Até 30/11",
      "anuidade_desc": 0.08,
      "material_avista_desc": 0.08,
      "material_bo": 9,
      "material_cc": 12,
      "cota_bo": 4,
      "cota_cc": 12,
      "cota_obs": "Sem desconto"
    },
    {
      "id": "p4",
      "label": "Até 31/12",
      "anuidade_desc": 0.06,
      "material_avista_desc": 0.05,
      "material_bo": 8,
      "material_cc": 12,
      "cota_bo": 3,
      "cota_cc": 12,
      "cota_obs": "Sem desconto"
    }
  ]
};

const BLOCOS = [
  {
    "unidade": "Freguesia",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "1º Ano (Tarde)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 41634,
    "mensalidade": 3299,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 46438,
    "mensalidade": 3699,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 51214,
    "mensalidade": 4097,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 58125,
    "mensalidade": 4673,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 53061,
    "mensalidade": 4251,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "1º Ano (Tarde)",
      "2º Ano (Manhã)",
      "2º Ano (Tarde)",
      "3º Ano (Manhã)",
      "3º Ano (Tarde)",
      "4º Ano (Manhã)",
      "4º Ano (Tarde)",
      "5º Ano (Manhã)",
      "5º Ano (Tarde)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 58038,
    "mensalidade": 4666,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 63059,
    "mensalidade": 5085,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 70504,
    "mensalidade": 5705,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 39787,
    "mensalidade": 3145,
    "cota": 2044,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "1º Ano (Tarde)",
      "2º Ano (Tarde)",
      "3º Ano (Tarde)",
      "4º Ano (Tarde)",
      "5º Ano (Tarde)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 43798,
    "mensalidade": 3479,
    "cota": 2044,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 48256,
    "mensalidade": 3851,
    "cota": 2044,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 54907,
    "mensalidade": 4405,
    "cota": 2044,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "anuidade": 30707,
    "mensalidade": 2489,
    "cota": 842,
    "material": 2753.32,
    "biling_anuidade": 10620,
    "series": [
      "1º Ano (Manhã)",
      "2º Ano (Manhã)",
      "3º Ano (Manhã)",
      "4º Ano (Manhã)",
      "5º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "anuidade": 36637,
    "mensalidade": 2983,
    "cota": 842,
    "material": 3522.76,
    "biling_anuidade": null,
    "series": [
      "6º Ano (Manhã)",
      "7º Ano (Manhã)",
      "8º Ano (Manhã)",
      "9º Ano (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "anuidade": 38571,
    "mensalidade": 3144,
    "cota": 842,
    "material": 4008.8,
    "biling_anuidade": null,
    "series": [
      "1ª Série (Manhã)",
      "2ª Série (Manhã)"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "anuidade": 43202,
    "mensalidade": 3530,
    "cota": 842,
    "material": 5012.36,
    "biling_anuidade": null,
    "series": [
      "3ª Série (Manhã)"
    ]
  }
];

const MBLOCOS = [
  {
    "unidade": "Freguesia",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Freguesia",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Metropolitano",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Recreio",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Rio 2",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Tijuca",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF1 · 1º ao 5º Ano",
    "segmento": "EF1",
    "material": 2753.32,
    "series": [
      "1º Ano",
      "2º Ano",
      "3º Ano",
      "4º Ano",
      "5º Ano"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EF2 · 6º ao 9º Ano",
    "segmento": "EF2",
    "material": 3522.76,
    "series": [
      "6º Ano",
      "7º Ano",
      "8º Ano",
      "9º Ano"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 1ª e 2ª Séries",
    "segmento": "EM",
    "material": 4008.8,
    "series": [
      "1ª Série",
      "2ª Série"
    ]
  },
  {
    "unidade": "Valqueire",
    "bloco": "EM · 3ª Série",
    "segmento": "EM",
    "material": 5012.36,
    "series": [
      "3ª Série"
    ]
  }
];

const BILING = {
  "anuidade": 10620,
  "parcelas": [
    {
      "label": "12x — a partir de Janeiro",
      "n": 12
    },
    {
      "label": "11x — a partir de Fevereiro",
      "n": 11
    },
    {
      "label": "10x — a partir de Março",
      "n": 10
    },
    {
      "label": "9x — a partir de Abril",
      "n": 9
    }
  ]
};

const PORTAS = [
  {
    "data": "29/08/2026",
    "label": "29 de Agosto",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "12/09/2026",
    "label": "12 de Setembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "26/09/2026",
    "label": "26 de Setembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "10/10/2026",
    "label": "10 de Outubro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "24/10/2026",
    "label": "24 de Outubro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Rio 2",
      "Valqueire"
    ],
    "fora": [
      "Tijuca",
      "Recreio"
    ]
  },
  {
    "data": "31/10/2026",
    "label": "31 de Outubro",
    "participantes": [
      "Freguesia",
      "Recreio",
      "Tijuca",
      "Valqueire"
    ],
    "fora": [
      "Metropolitano",
      "Rio 2"
    ]
  },
  {
    "data": "14/11/2026",
    "label": "14 de Novembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "28/11/2026",
    "label": "28 de Novembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "05/12/2026",
    "label": "5 de Dezembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "12/12/2026",
    "label": "12 de Dezembro",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  },
  {
    "data": "10/01/2027",
    "label": "10 de Janeiro de 2027",
    "participantes": [
      "Freguesia",
      "Metropolitano",
      "Recreio",
      "Rio 2",
      "Tijuca",
      "Valqueire"
    ],
    "fora": []
  }
];

const METAS = [
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1248.77,
    "ticket_alvo": 1373.64
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1297.25,
    "ticket_alvo": 1426.98
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1525.53,
    "ticket_alvo": 1678.08
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1687.39,
    "ticket_alvo": 1856.13
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1474.24,
    "ticket_alvo": 1621.66
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1644.63,
    "ticket_alvo": 1809.1
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1607.66,
    "ticket_alvo": 1768.42
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1542.51,
    "ticket_alvo": 1696.76
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1619.16,
    "ticket_alvo": 1781.07
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1582.63,
    "ticket_alvo": 1740.89
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1756.38,
    "ticket_alvo": 1932.02
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1812.14,
    "ticket_alvo": 1993.35
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 957.77,
    "ticket_alvo": 1053.55
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1062.47,
    "ticket_alvo": 1168.71
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1295.08,
    "ticket_alvo": 1424.59
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1327.39,
    "ticket_alvo": 1460.13
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1152.4,
    "ticket_alvo": 1267.64
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1316.03,
    "ticket_alvo": 1447.64
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1422.47,
    "ticket_alvo": 1564.71
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1549.11,
    "ticket_alvo": 1704.02
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1574.17,
    "ticket_alvo": 1731.59
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1411.97,
    "ticket_alvo": 1553.16
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1353.9,
    "ticket_alvo": 1489.29
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1489.44,
    "ticket_alvo": 1638.39
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1317.0,
    "ticket_alvo": 1448.7
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1254.25,
    "ticket_alvo": 1379.67
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1654.89,
    "ticket_alvo": 1820.38
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1865.59,
    "ticket_alvo": 2052.15
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1627.86,
    "ticket_alvo": 1790.65
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1826.36,
    "ticket_alvo": 2009.0
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1614.69,
    "ticket_alvo": 1776.16
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1740.47,
    "ticket_alvo": 1914.51
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1705.06,
    "ticket_alvo": 1875.57
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1779.58,
    "ticket_alvo": 1957.54
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1815.54,
    "ticket_alvo": 1997.1
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 2064.53,
    "ticket_alvo": 2270.98
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 2338.14,
    "ticket_alvo": 2571.95
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 2284.54,
    "ticket_alvo": 2513.0
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 2366.89,
    "ticket_alvo": 2603.58
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 2289.83,
    "ticket_alvo": 2518.81
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 2142.07,
    "ticket_alvo": 2356.28
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 2234.17,
    "ticket_alvo": 2457.58
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 2190.49,
    "ticket_alvo": 2409.54
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 2113.38,
    "ticket_alvo": 2324.72
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1982.89,
    "ticket_alvo": 2181.18
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 2020.92,
    "ticket_alvo": 2223.02
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1948.68,
    "ticket_alvo": 2143.54
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1821.63,
    "ticket_alvo": 2003.79
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1420,
    "ticket_alvo": 1562.0
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1413.13,
    "ticket_alvo": 1554.45
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1629.55,
    "ticket_alvo": 1792.51
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1576.99,
    "ticket_alvo": 1734.69
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1509.41,
    "ticket_alvo": 1660.35
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1458.68,
    "ticket_alvo": 1604.55
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1625.55,
    "ticket_alvo": 1788.1
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1750.25,
    "ticket_alvo": 1925.28
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1808.19,
    "ticket_alvo": 1989.01
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1831.33,
    "ticket_alvo": 2014.46
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1564.16,
    "ticket_alvo": 1720.57
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1731.56,
    "ticket_alvo": 1904.72
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1250,
    "ticket_alvo": 1375.0
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1199.81,
    "ticket_alvo": 1319.79
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1469.24,
    "ticket_alvo": 1616.17
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1404.65,
    "ticket_alvo": 1545.12
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1362.76,
    "ticket_alvo": 1499.04
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1319.98,
    "ticket_alvo": 1451.98
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1539.34,
    "ticket_alvo": 1693.27
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1426.08,
    "ticket_alvo": 1568.69
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1448.18,
    "ticket_alvo": 1593.0
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1451.59,
    "ticket_alvo": 1596.74
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1379.36,
    "ticket_alvo": 1517.29
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1439.58,
    "ticket_alvo": 1583.54
  }
];
