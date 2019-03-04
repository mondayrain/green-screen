// This list of videos IDs is generated manually by running `fetch_videos.rb` every so often.
// We would love for this to be completely automatic, but Youtube API Quotas are a thing,
// as well as the fact that private API Keys + GitHub Pages don't go well together :)

const VIDEOS = [
  'nqBMg__fRm8',
  'GnYHFRq7-5s',
  'NHyLfrHmxfM',
  'HCu76aAAcro',
  '_5r4loXPyx8',
  '4-4NIf5FcAA',
  'pF72px2R3Hg',
  'nUnJQWO4YJY',
  'o08ykAqLOxk',
  '7V8oFI4GYMY',
  'Pk2tNO3gENw',
  'dHn_bNfbllA',
  'Qp3eooTJkY4',
  '6khq6JO67G8',
  'CDCa-JIVbEs',
  'AEFqUh4PMmI',
  'VCYeLuURxRM',
  'HakCAdPrlms',
  '8c5ZN7BseNA',
  'QJG7HmQyYcY',
  'EnIJn0SS-3U',
  'yHyqj65Rq_A',
  'krU01hlCdxo',
  '8vnYwvYxO6g',
  'PE1-RYPJNdg',
  'uV2XCQZWf_g',
  '75evrzgNsMs',
  'RLtI8-Afxhg',
  'CnOwZS2D0GY',
  'SBRUyf_nv5c',
  'KLp9SK4qb7o',
  'Bye-XjYGOzM',
  'ydZfSuz-Hu8',
  'Zv8YJ8HMZ0I',
  '8MElzoJ2L6U',
  'pmYrwsSX9Ow',
  'xA6p0w2Xoqg',
  'f3aW-5qmblY',
  'miukaKDL-Cs',
  'Ny8bAiyhgI8',
  'y4Ev9jneXfw',
  'p6-Mi1uY9AE',
  'B0-DS6qnFTk',
  'NBDkTCKAGBQ',
  'jabSnZXafL8',
  'qpsJ1ZQdEqo',
  'gf3cTGmvN7s',
  '-i-Idh56Owk',
  'HjNv_iTsXn8',
  'w6EwsrCYJ0c',
  '14r7f9khK70',
  'IgypD2ziSus',
  'nW40QQ-yX9s',
  'DJjJCvqA6vE',
  'LTto_PusK8I',
  'HsEI3sx2Jds',
  'vDMgMvcCm6w',
  'uME5biz3eCU',
  '1yAxfywPKVw',
  'seRQYsUWa5g',
  '-7aoICyTj8s',
  '-q9K0Hjzk6o',
  '2X4IUAs7zdw',
  '12g2BgFRpyc',
  'K4zrFlMBT0w',
  'OagTXWfaXEo',
  'dCibSc4mgjU',
  'KHaywTPAaX4',
  'kXgELGBuMfA',
  'smhm46w3EFc',
  'Gc0NZ3n0-e0',
  '0HgirtyL4TM',
  '8VfjvlWRW0k',
  'BxKfpt70rLI',
  't5Ps_AJJwgo',
  'Xd0geMqxtZQ',
  'JwI_fQx0wJI',
  'v4Hnc2NMKxM',
  'OasbYWF4_S8',
  '4D4NlPI-T6c',
  'eCgeDWyoKdg',
  'pvctwizAxgQ',
  'DkZ7BJQupVA',
  '-qfI3DZmmQw',
  '6RlxySFrkIM',
  '5HOijUtExiM',
  '__Kt_oU9iss',
  'eyUqqA8wA0A',
  'poPLSgbSO6k',
  '5qx2WFpNTPs',
  'c2YInNlzMDQ',
  'yzDjjUAt3zc',
  'Xppoy2veSP0',
  'EbjKcHPmxKQ',
  '7hmYkEE9KXo',
  'E4M-K9geKiE',
  'a2KqcvD3m7Q',
  'ohMUsGq14Dw',
  's4LZwCDaoQM',
  'b7GMpjx2jDQ',
  'L2Rc8oTOtd8',
  'io3VyJIWW38',
  'KmMP67eC2tg',
  'DJFJitHcCB8',
  'ARBqPuvYq0c',
  'zU62hh3DBfg',
  '-Yp1KKWpPpU',
  '2c8YxMb0tlk',
  'aHDknYXnw8w',
  'kTj33QH41Cw',
  'BRbtp3FrqzQ',
  'dtjE3vI5AVU',
  'AjHVMhAOZa4',
  'NplprEGyFKw',
  'RT8pEDdvmDM',
  'GSiGLc6fsl0',
  'ESYikjLvc54',
  'lIJOmd-sF-c',
  'Qu-JBurTRKU',
  '_dppzdFBQVY',
  'vAoorDDRkoY',
  'BFxKWBN71yE',
  'LE-YgnY9K4g',
  'CqkfZPgTVyU',
  'ifrHogDujXw',
  'SdAcC8f6GZQ',
  '3Hhym3LdIFk',
  '0ew4c5Id1N8',
  '3TioZ2sVL-E',
  '3S4XkPnURSc',
  '8BJ9BYucO-o',
  'vbWw7h29BQ4',
  'skL8xb-vvCA',
  'X-844mUAX78',
  'mZgJFTkYfus',
  '0k2-SzlDGko',
  'sLg7gDU_xXk',
  'FTMaUVbBDdM',
  'nU0yNgHHH1g',
  'UViZDyM58Aw',
  'Wqab1tkq28o',
  'VTfgNFz1DBM',
  '1qVO6ifsfyA',
  'Wyz9Bw8THXI',
  'tvvy5n1h9RA',
  '5yXDHazepUw',
  't2vL9Z_uosU',
  'vzD99rlCUws',
  'oCWYaPNGH1s',
  '82Nw6lyi6YM',
  'i8RA59M4TcA',
  'AaFtQ21h1-E',
  'io50wwrvhJs',
  'A4kX9xKGeEw',
  '63hAHbkzJG4',
  'stHSDcenZRQ',
  'ReOj12UAus4',
  'B652fMXENaM',
  '4uX2dPbslC0',
  'zAj_3yfEEXg',
  '2hXHz9K1mrE',
  'CDzJeybKSmQ',
  'fvc21KNyD9g',
  'IZgBPL17a6M',
  'AzQBzU1rTBg',
  '_stYCuU5qBI',
  'rzIrp4DfgJA',
  'k47UIwIgdaQ',
  'igAenLWyceI',
  'vipMFkF4fGM',
  'PAfBoUPwhhc',
  'MQUBL32MEK8',
  'FTN5BBSLCNM',
  'QrzMdmCUVX4',
  'nc591fMWKjc',
  'BZgJY2USEpg',
  'b8H4Z2GzkKI',
  'NhdRfQYJl4o',
  'LaXuvjCFhV4',
  'i2em5C5pJtw',
  'T5o7RdlP4FY',
  'utWnxJZX2FE',
  'WCKz8ykyI2E',
  'MjLo5RqAyzs',
  'eO1GoPbXubg',
  'qdkih8Szz8s',
  'w2pRGuY0WxE',
  'IFjD3NMv6Kw',
  'k9RGdbxzsBY',
  '7ygw2L-Qi0c',
  'jVV_2d8aARw',
  'fS1EGcgBFts',
  'lh3RwrDJ6yg',
  '78WdIu1XEwg',
  'o86Ut6kAEMQ',
  '_4h88YWiMuk',
  'kj5_wjY5Hpw',
  '5n5S7BjZUo0',
  'RnCYaGR_b1Y',
  'TRb52O76HxQ',
  't54iKae1SiY',
  'aKyvGHycngM',
  'kwV9a42fw_k',
  'owYklzf0le8',
  'E6mVo2hDmsM',
  'Aw0JiU-eWoU',
  'E8dkWQVFAoA',
  'LERALDjaFqM',
  'F3IBncCauaA',
  'J7Z0Ix3oBWc',
  'Np0AktXU178',
  'ZtmOAZoyRa0',
  'Bqf3xTTCiu8',
  'cPaYVoVKBjI',
  'UcfStfpTEx4',
  '5eTCZ9L834s',
  '2pq-shPP4cw',
  'NSL_xx2Qnyc',
  'BAdeFHlhKi4',
  'lmyZMtPVodo',
  'w6vVXmwYvgs',
  'ycVH_04azhw',
  'd_HHnEROy_w',
  'eYLb7WUtYt8',
  '2kBTRg3wPIw',
  '9U3OfOyRUk0',
  'edDZNkm8Mas',
  'GlDatp51hMw',
  'z_qYtUeKUl4',
  'Vb74WiFEIhc',
  'FSXulItnq-s',
  'g_jgiAzEiCQ',
  '4BNXdwL-ELw',
  'CIP5MeT2UnE',
  'nLdm1Yqvx-Y',
  'ZCR2V1HAq78',
  'qZ95Iv9o1DA',
  'jR9Hjojbnuk',
  '6oUG_Q5yBjY',
  'v7BDAAXtfQw',
  'feLqh4juPqY',
  'kbtZaqWVUgA',
  'LM7FPzcvgbk',
  'Zxwr1KL-6NI',
  'G4H1N_yXBiA',
  'hWkYtZxpQUo',
  'uf_mrQpN1Hw',
  '7TRI7yeeYQQ',
  'TZ0tovrhf5Y',
  'LzXe_Z59q5Q',
  'mD5jnxhne7o',
  's9XqNC5M3j8',
  'RV_cfPAaAwo',
  'pjZxN3eDQ3Y',
  'GRdgBMluP-o',
  'SJRB0-OhbbU',
  'eJnAV_quG6Y',
  '_pDqa8xliw0',
  '_-_H1vu5BHA',
  'NufpsYYZQYs',
  'WeoIsjYBQH0',
  'CIukOyM1x80',
  'bbci7wMuQWM',
  '_qSF4j9u8QY',
  'l2MsZ-X--7M',
  'aoRNBCAPNXg',
  'cqbOU07ZI2k',
  'DW_0FJMLMaw',
  'yI21R1M-eWE',
  'dtN0iZ5eqq8',
  'XnLKUnLNJlc',
  'DJgMzxUTx2U',
  'GeVcyYQzk_w',
  'VcL3BQeteCc',
  'oc7dtKNrkVM',
  'FxMHl5Gr2Yg',
  'Eu9otSdLvJk',
  'fbTxNkVdM38',
  'YN0bCJ1M6p8',
  'FRnY48_iQUg',
  '2WLfcw3KfnE',
  'hnNcQkpxPL0',
  '04T23houM4s',
  'gHHjW3LvXtM',
  'VOUazeCDWkg',
  'CbMEwynXv7g',
  'ob_asuZ6OtE',
  'WaqO0_vhcJ8',
  'JTjza7x9E_g',
  'wGq-RYASg7Q',
  'SYO2OA1b8Os',
  'EpM_10cCQwY',
  'tF7asIa0SyU',
  'X6jOZarwNKU',
  '2pYtd6M8D4U',
  'oyCAtZqQMaI',
  'oRZJY0ThMt4',
  'BY6JLWPsvRY',
  'ScXp98QJTy0',
  'm0RQ_nWmjvA',
  'K2EXsoiZ-To',
  'nkDgxsyZsrY',
  'ZqeA_psKn2E',
  'gmpdqOerOF4',
  'QJC2GtM56rc',
  '6vHNVTbRRUQ',
  'n77BfxnVlyc',
  'f76ozRgklfk',
  'fM7AU78iPLA',
  'ifTBxGba_Ac',
  'cfKaZ_mNALQ',
  'G5KIUmfEe7U',
  'x8AeskqWfAk',
  'DbPMor02ago',
  '3pO0D9f-_-w',
  'S3U85jaPA-8',
  'rbaxVm_f5i8',
  'WiPuBMatHYs',
  'm2nOynCy41k',
  'j5SjqFJ-lnk',
  'cJTyetp63t4',
  'mVXojAr1FoA',
  'FX1ml9ZTRFs',
  'U9RBe5Ie12c',
  'ZVpABMspmD8',
  'uPD9lNj01V4',
  '07nUusbum-k',
  'nVfzWPPdM-Y',
  'r4t7rO-nhOw',
  'AtRekbKyCZw',
  'AsAEUfWidD8',
  'hopMRB1zTIk',
  'E9zy0OOpT9o',
  'GbTwa4nmJSw',
  'FnQVrypJ2C4',
  '__0Spwj8DkM',
  'JgcWmE_2T6Q',
  '_PKbUFJ3Iu4',
  'X0Jt8Xc7jjY',
  '8NnGGTwMgfc',
  'A-X0rvXZhF4',
  'zOr7cfFSmvk',
  'onx9boKyvJ0',
  'poMTTa8MqEU',
  'ONw3E-doX-g',
  '65Vt-mTYfW4',
  'WBxgTtpNq5Q',
  'eMNUXctBwBw',
  'A0pB1qw8SMs',
  'eRLJscAlk1M',
  '0VHPkv8ZQQI',
  'Z24Dd1Tcz1Y',
  'MqermIBhzAI',
  'EVyXjxLceBg',
  '1sAdRUKLXzo',
  'JaSe85Mcwp0',
  'AIzwXHn74QI',
  'IvEmsuCJRdY',
  'WdT2XA7gTok',
  '-_T1sxIIvbM',
  'Oa7ntoCf8yU',
  '1eIFfuCEfnw',
  'lvxfttfjqpo',
  '2z5vFxNVmK8',
  '7HM8Kl7PrYE',
  'VaeS8WY_XNI',
  'zMOQiBkFZeo',
  '0dgQwmvBM2w',
  'yYG6yk4u-tQ',
  'Dhas9OEc1Lk',
  'WwTpfVQgkU0',
  'XqQCI_ZhtxA',
  'Lqjgs6b8XPU',
  '9nwXC39eghM',
  '_6xlNyWPpB8',
  '9bRUEnTYX0U',
  'K-mgmIjaRlY',
  'gEk6JLJNg0U',
  'aS_AO_bfll8',
  'PRJvuA5bW9s',
  'OqHp03RRTDs',
  'V0lQ3ljjl40',
  'JEUShQ7r_tE',
  'Bx0aDeru_Xw',
  'oUWLR8S1_eA',
  'DRO_rIkywxQ',
  'eEL-YgJCumY',
  'u6mI6tARq_I',
  'QwSv-DbR3Y8',
  'RYaCTDMmeig',
  'VsahyCrZ9sk',
  'T0xqRj8zGQE',
  '-GGTM5T_Vas',
  'e-Q0eLTprig',
  '_vQrtmq87Cc',
  'riUzvCHXNeE',
  'rY6wtj_VAOk',
  'OSJzU3XiErE',
  'DTmiCiLBJ30',
  'Hz6qomFM_dw',
  'AlA4_lesrU4',
  'qXD8DMQpeHQ',
  'HMT3wb4h234',
  '2qZjcF5aNqE',
  'qJdw9he7InY',
  'Kje2UESRE9A',
  'i8MYNg2VP-g',
  '06sd9-o-CPw',
  'UaS7wBAh5OI',
  '1Ab9HUmQw44',
  'ZvqIGeJPG0U',
  'a4B-1NEqrDY',
  'pIX02vehRfE',
  'OHPrWek3nQ4',
  'BAdT3LrFhkk',
  'Prx6rJPZFIE',
  'V1-SohaHfOk',
  'Zqi-hzCYsa0',
  'UKE1G1a1avo',
  'fJ0o2E4d8Ts',
  'uuOsDxnOX-k',
  'x1SgmFa0r04',
  'iZRGUADAu2Q',
  'jbkSRLYSojo',
  '0_05tlNl7NA',
  'xplIIqCqjGk',
  '4MjE3ML38XI',
  '6cx60BWpjv4',
  'uvBG8jlOESw',
  'nS8NIVspiqE',
  '9-xdy1Jr2eg',
  'cBxN9E5f7pc',
  'uHEfRAooih8',
  'qAIolKgDPrA',
  'ZcIDkkEBYdQ',
  'YZqSgguqnXE',
  '-OIqBUTOdb0',
  'kGcrYkHwE80',
  '5_hLuEui6ww',
  'pgNLonYOc9s',
  'RpqVmvMCmp0',
  'eSbDfaQvXTU',
  '68YHI5KAmNM',
  '42QGf8qerg4',
  'N3SQlrmV1cE',
  '89tInECFdQ4',
  'SpIxZiBpGU0',
  'm5OksoRVhWE',
  'okpSZaYnfik',
  '6zGA_VsXTRg',
  'gxPFKzgUNEw',
  'BlAfFgKQ5r8',
  'kmo9rTK5b70',
  'e3Ef5QCvTls',
  '7DNhqtYf47E',
  'mYBCdc-fVzk',
  'MU0TfOwxQIE',
  'O5lBwrJcUOk',
  'QAkW_i0bDpQ',
  'o793_X9c3b4',
  '2gofJ4CsuMY',
  'YCZggFFtouo',
  'JulEQbHESZM',
  '3GZKyEuEz8A',
  'rOClzJFxAYU',
  'dXp3wQoC9M4',
  '8Fj2ARn1WMY',
  'IQvtM5aw9is',
  'v4H0lS9tlh8',
  'qY28gIa2Aio',
  'JLhN20-eL5w',
  'MLQ5mllqcOQ',
  'gTdESBJMXB0',
  '9cby_UZsTA0',
  'TcBrchkBSBE',
  'x6VyJd9LVpI',
  'ihbRtl-pxqs',
  'Nzm8EemjEoI',
  'kFeSrG7gjvU',
  'YaVnsll0tFo',
  'htzqPrrLORo',
  'S3wPcrAUTfM',
  'H36tr4xDynA',
  'lLId50eQQe0',
  'IfUPJ_ip6Z8',
  'MHkZY6dQjos',
  'NDBA3STy9N0',
  'ac78Fyn4CxY',
  'w92GcA5KhPc',
  '_XnA4B0IlCU',
  'Y332SeVd-F0',
  'P2COz26cmVU',
  'hmqJ5DXypBs',
  'RUIg-gkN7X0',
  'IXWX2toCuyM',
  'JuSdBvsYIE0',
  'u3sVjvoe0dc',
  'ZMPpPAR_itM',
  'WMUZeqM-Olg',
  'h2VoGtA1ZiA',
  'RsCMQkliWkw',
  'EiIIst2nSHI',
  '_EkMjTnWk14',
  '-gxnbN7n7hY',
  'nYodgWapmgc',
  'LViQjSXjZPw',
  'PIMy0QBSQWo',
  'XDhSgCsD_x8',
  '4q8bZlt-iuc',
  'wRrKi3dwXls',
  'IZHOPwLR3zc',
  'tzTv0SbrqiA',
  'QoqI9m3h4jQ',
  '3zDwoEleEmQ',
  '68N35zI6mqg',
  '-GqCaZWqvxA',
  'CjgIKGaCgf4',
  '4LPRQaG83Ls',
  'W_QV6yDBS70',
  'SAVJ-J5Lpjs',
  'Xb7tEC59ebs',
  'l1SepLP6oac',
  'sgVIKzNuiAo',
  'rpOwTspdwkI',
  'RjtTnNjSTSY',
  'KaztBjWlW-g',
  'HtFLUEyOp-4',
  'XbcaSBq9UK8',
  'YVYNvaN3c4A',
  '5DiQpgPi_8g',
  'Njyik0IB52Y',
  '00Q3X0-Rihw',
  '_GQH-ZgbNF8',
  'QWdaBI5dkhY',
];

  