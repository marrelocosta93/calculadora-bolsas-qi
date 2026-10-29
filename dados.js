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
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 3,
      "cota_cc": 5,
      "cota_obs": null
    },
    {
      "id": "p2",
      "label": "Até 31/10",
      "anuidade_desc": 0.08,
      "material_avista_desc": 0.05,
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 3,
      "cota_cc": 5,
      "cota_obs": null
    },
    {
      "id": "p3",
      "label": "Até 30/11",
      "anuidade_desc": 0.07,
      "material_avista_desc": 0.05,
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 2,
      "cota_cc": 5,
      "cota_obs": null
    },
    {
      "id": "p4",
      "label": "A partir de 01/12",
      "anuidade_desc": 0.06,
      "material_avista_desc": 0.05,
      "material_bo": 9,
      "material_cc": 12,
      "material_obs": "Último vencimento em ago/27",
      "cota_bo": 1,
      "cota_cc": 5,
      "cota_obs": null
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

// Tabela de Preços 2027 - Qi.pdf, página 2. Valores anuais por produto.
const MATERIAIS_EXTRAS = [
  { produto: 'international', nome: 'International School', bloco: 'EF1 · 1º ao 5º Ano', material: 817.57, series: ['1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano'] },
  { produto: 'mooney', nome: 'Mooney', bloco: 'EF1 · 4º e 5º Ano', material: 300.58, series: ['4º Ano', '5º Ano'] },
  { produto: 'mooney', nome: 'Mooney', bloco: 'EF2 · 6º ao 9º Ano', material: 240.46, series: ['6º Ano', '7º Ano', '8º Ano', '9º Ano'] },
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
    "data": "09/01/2027",
    "label": "09 de Janeiro de 2027",
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
    "ticket_meta": 1259.08,
    "ticket_alvo": 1259.08,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 55438.53,
    "pagantes_adicionais": 4,
    "pagantes_restantes": 15,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1259.08,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 0,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1259.08,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 0,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1259.08,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 0,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1259.08,
    "ticket_alvo": 1259.08,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 27205.0,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 1431.88,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 35640.98,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 5,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 1431.88,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 1431.88,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 33283.02,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1431.88,
    "ticket_alvo": 1431.88,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 30051.64,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 4,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1530.4,
    "ticket_alvo": 1530.4,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 40357.63,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 8,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1530.4,
    "ticket_alvo": 1530.4,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 39996.5,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 1,
    "projecao_pendente": false
  },
  {
    "filial": "Freguesia",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1530.4,
    "ticket_alvo": 1530.4,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 36729.94,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 4,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1117.26,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 80174.35,
    "pagantes_adicionais": 6,
    "pagantes_restantes": 9,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1117.26,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 27144.07,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 3,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1117.26,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 0,
    "pagantes_adicionais": 0,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1117.26,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 26204.45,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 6,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1117.26,
    "ticket_alvo": 1117.26,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 11646.54,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1319.87,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 66599.68,
    "pagantes_adicionais": 5,
    "pagantes_restantes": 16,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1319.87,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 34819.35,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 4,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1319.87,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 27431.08,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 10,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1319.87,
    "ticket_alvo": 1319.87,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 32084.92,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1160.44,
    "ticket_alvo": 1160.44,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 32745.44,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 24,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1160.44,
    "ticket_alvo": 1160.44,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 27850.3,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 6,
    "projecao_pendente": false
  },
  {
    "filial": "Metropolitano",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1160.44,
    "ticket_alvo": 1160.44,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 18056.68,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1404.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 49910.32,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 14,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1404.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 23745.61,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1404.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 32443.85,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 7,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1404.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 28906.26,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 3,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1404.67,
    "ticket_alvo": 1404.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 32227.39,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 8,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 1643.09,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 43519.7,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 11,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 1643.09,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 46375.32,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 9,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 1643.09,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 37762.43,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 6,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1643.09,
    "ticket_alvo": 1643.09,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 25183.61,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 8,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1667.89,
    "ticket_alvo": 1667.89,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 46903.36,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 13,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1667.89,
    "ticket_alvo": 1667.89,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 34970.31,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 5,
    "projecao_pendente": false
  },
  {
    "filial": "Recreio",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1667.89,
    "ticket_alvo": 1667.89,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 32768.43,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 5,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2197.02,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 159815.71,
    "pagantes_adicionais": 7,
    "pagantes_restantes": 29,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2197.02,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 56623.09,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 7,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2197.02,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 52198.23,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 8,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2197.02,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 37805.46,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 2197.02,
    "ticket_alvo": 2197.02,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 54266.16,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 12,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 1850.15,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 43046.89,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 6,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 1850.15,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 43573.34,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 13,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 1850.15,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 37140.71,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 13,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1850.15,
    "ticket_alvo": 1850.15,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 41761.8,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 12,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1937.0,
    "ticket_alvo": 1937.0,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 48036.01,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 10,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1937.0,
    "ticket_alvo": 1937.0,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 37177.56,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 6,
    "projecao_pendente": false
  },
  {
    "filial": "Rio 2",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1937.0,
    "ticket_alvo": 1937.0,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 46487.85,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 1,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1401.19,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 77400.84,
    "pagantes_adicionais": 5,
    "pagantes_restantes": 8,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1401.19,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 35633.26,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1401.19,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 27514.64,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 4,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1401.19,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 34324.86,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 2,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1401.19,
    "ticket_alvo": 1401.19,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 31486.81,
    "pagantes_adicionais": 2,
    "pagantes_restantes": 1,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 1482.12,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 80085.05,
    "pagantes_adicionais": 5,
    "pagantes_restantes": 5,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 1482.12,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 48237.88,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 7,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 1482.12,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 41017.64,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 6,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1482.12,
    "ticket_alvo": 1482.12,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 40168.74,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 8,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1221.67,
    "ticket_alvo": 1221.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 12523.04,
    "pagantes_adicionais": 1,
    "pagantes_restantes": 14,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1221.67,
    "ticket_alvo": 1221.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 29320.32,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 7,
    "projecao_pendente": false
  },
  {
    "filial": "Tijuca",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1221.67,
    "ticket_alvo": 1221.67,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": 29320.32,
    "pagantes_adicionais": 3,
    "pagantes_restantes": 7,
    "projecao_pendente": false
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "1º Ano",
    "ticket_meta": 1217.77,
    "ticket_alvo": 1217.77,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "2º Ano",
    "ticket_meta": 1270.7,
    "ticket_alvo": 1270.7,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "3º Ano",
    "ticket_meta": 1562.24,
    "ticket_alvo": 1562.24,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "4º Ano",
    "ticket_meta": 1256.93,
    "ticket_alvo": 1256.93,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF1",
    "serie": "5º Ano",
    "ticket_meta": 1672.42,
    "ticket_alvo": 1672.42,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "6º Ano",
    "ticket_meta": 1363.93,
    "ticket_alvo": 1363.93,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "7º Ano",
    "ticket_meta": 1824.57,
    "ticket_alvo": 1824.57,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "8º Ano",
    "ticket_meta": 1653.01,
    "ticket_alvo": 1653.01,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EF2",
    "serie": "9º Ano",
    "ticket_meta": 1539.98,
    "ticket_alvo": 1539.98,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "1ª Série",
    "ticket_meta": 1550.81,
    "ticket_alvo": 1550.81,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "2ª Série",
    "ticket_meta": 1392.89,
    "ticket_alvo": 1392.89,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  },
  {
    "filial": "Valqueire",
    "segmento": "EM",
    "serie": "3ª Série",
    "ticket_meta": 1460.92,
    "ticket_alvo": 1460.92,
    "versao": "2026-10-29-oficial-valqueire15-v1",
    "receita_pendente": null,
    "pagantes_adicionais": null,
    "pagantes_restantes": null,
    "projecao_pendente": true
  }
];
