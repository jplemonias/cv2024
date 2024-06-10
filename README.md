# cv24

curriculum vitae 2o24

-----------------

[FR]

Ce CV est réalisé en `HTML` `CSS` `JavaScript`.

Il utilise le CDN de `Tailwind` (en local v3.4.1).

la gestion des éléments se fait principalement en `flexboxes`.

Hébergé sur `GitHub`.

Il est généré grace à deux variables `JOBS` et `INFOS`.

Tous deux dans leur fichier javascript respectif `jobs-datas.js` et `personals-datas.js`.

Ainsi nous pouvons édité nimporte quelle information facilement, à condition de respecter quelques conditions.

```js
// jobs-datas.js

JOBS = {
    shortNameOfJob:
    [
        {
            jobName: "string"
        },
        {
            job: "string"
            company: "string",
            companyLoc: "string",
            dates: "string",
            tasks: [
                "string"
                ],
            loc: "string"
        }
    ]
};
```

```js
// personals-datas.js

INFOS ={
    pp: "pp.png",
    fullName: {
        name: "string",
        firstName: "string",
    },
    contact: {
        address: {
            number: "string",
            streetName: "string",
            zipCode: "string",
            city: "string",
        },
        phon: "string",
        mail: "string",
    },
    aboutMe: [
        [
            "string"
        ]
    ],
    formations: [
        {
            institution: "string",
            city: "string",
            learning: [
                {
                    dates: "string",
                    degree: "string",
                    optention: "boolean / or array with string"
                }
            ]
        },
        {
            //[...]
                    optention: [
                        "string"
                    ]
            //[...]
        }
    ],
    skills: [
        {
            titled: 'string',
            lvl: 'string'
        },
        {
            titled: 'string'
        },
        {
            titled: 'string',
            lvl: "number"
        }
    ]
    };
```

```
v 0.4.0
|
+--public
|  |
|  +--css
|  |  |
|  |  \--print.css
|  |  \--style.css
|  |
|  +--fonts
|  |  |
|  |  \--LICENSE.txt
|  |  \--PermanentMarker-Regular.ttf
|  |
|  +--img
|  |  |
|  |  \--ico.png
|  |  \--pp.png
|  |
|  +--js
|     |
|     \--jobs-datas.js
|     \--main.js
|     \--personals-datas.js
|     \--print.js
|     \--tailwind-CDN_3_4_1.js
|     \--tailwind-config.js
|
\--index.html  
\--README.md
```

-----------------

[EN]

This CV is realised in `HTML` `CSS` `JavaScript`.

He uses `Tailwind`'s CDN ( locally v3.4.1 ).

The `flexboxes` are mainly used for element management.

Hosted on `GitHub`.

He is generated using two variables, `JOBS` and `INFOS`.

Both in the respective javascript files `jobs-datas.js` and `personals-datas.js`.

So we can easily edit any information, provided we respect a few conditions.

```js
// jobs-datas.js

JOBS = {
    shortNameOfJob:
    [
        {
            jobName: "string"
        },
        {
            job: "string"
            company: "string",
            companyLoc: "string",
            dates: "string",
            tasks: [
                "string"
                ],
            loc: "string"
        }
    ]
};
```

```js
// personals-datas.js

INFOS ={
    pp: "pp.png",
    fullName: {
        name: "string",
        firstName: "string",
    },
    contact: {
        address: {
            number: "string",
            streetName: "string",
            zipCode: "string",
            city: "string",
        },
        phon: "string",
        mail: "string",
    },
    aboutMe: [
        [
            "string"
        ]
    ],
    formations: [
        {
            institution: "string",
            city: "string",
            learning: [
                {
                    dates: "string",
                    degree: "string",
                    optention: "boolean / or array with string"
                }
            ]
        },
        {
            //[...]
                    optention: [
                        "string"
                    ]
            //[...]
        }
    ],
    skills: [
        {
            titled: 'string',
            lvl: 'string'
        },
        {
            titled: 'string'
        },
        {
            titled: 'string',
            lvl: "number"
        }
    ]
    };
```

```
v 0.4.0
|
+--public
|  |
|  +--css
|  |  |
|  |  \--print.css
|  |  \--style.css
|  |
|  +--fonts
|  |  |
|  |  \--LICENSE.txt
|  |  \--PermanentMarker-Regular.ttf
|  |
|  +--img
|  |  |
|  |  \--ico.png
|  |  \--pp.png
|  |
|  +--js
|     |
|     \--jobs-datas.js
|     \--main.js
|     \--personals-datas.js
|     \--print.js
|     \--tailwind-CDN_3_4_1.js
|     \--tailwind-config.js
|
\--index.html  
\--README.md
```

-----------------