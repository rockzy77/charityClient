const dreamersData = [
    {   
        background: "https://media.istockphoto.com/id/1382275104/photo/metaverse-city-and-cyberpunk-concept-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=l55cKjFn46Ff2HgOFNVAnSxJlqMJd5vei8HoucTrYGQ=",
        image: "https://i.ibb.co/92fkL7M/new12.jpg",
        title: "CyberBrokers"
    },
    {
        background: "https://i.ibb.co/T17sgdV/new21.jpg",
        image: "https://i.ibb.co/CK3vkwY/new22.jpg",
        title: "Amazonia - Sebastiao Salgado"
    },
    {
        background: "https://i.ibb.co/y4WbK41/new31.jpg",
        image: "https://i.ibb.co/VWgqvXd/new32.webp",
        title: "LetsWalk"
    },
    {
        background: "https://i.ibb.co/TrVrZcV/new41.webp",
        image: "https://i.ibb.co/f4n25qr/new42.jpg",
        title: "Genuine Undead"
    },
    {
        background: "https://i.ibb.co/PwKF7vd/new51.jpg",
        image: "https://i.ibb.co/Rhht0Cq/new52.jpg",
        title: "Murakami.Flowers Official"
    }
];

const newSlidesData = [
    {
        background: "https://www.mediacityuk.co.uk/wp-content/uploads/2022/03/Comic-Relief_2022.jpg",
        image: "https://www.comicrelief.com/assets/logo.jpg",
        title: "Red Nose Day - Comic Relief"
    },
    {
        background: "https://i.ibb.co/zHxpR81/dreamers21.jpg",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEUAAAD/zAD/0wD/zwDwwABLPADWqwBGOABrVQBcSQDEnQC6lQBOPwDTqQAeGABvWQBlUQD/2gD4xgA5LQDNpAAaFQBgTQBXRgDNjuYFAAABL0lEQVR4nO3diU3DUABEwcQ2EMIdrv47pQW0+l5byUwBK70K9nAAAAAAAAAAAAD4p9e307rety58/pjWddm68G46rmtRqFChQoUKFSpUOLxwHmHPhcvTAOd5v4Xzy4jJz2nHhfcjJh8UdikMKCxTGFBYpjCgsExhQGGZwoDCMoUBhWUKAwrLFAYUlikMKCxTGFBYpjCgsExhQGGZwoDCMoUBhWUKAwrLFAYUlikMKCxTGFBYpjCgsExhQGGZwoDCMoUBhWUKAwrLFAYUlikMKCxTGFBYpjCgsExhQGGZwoDCMoUBhWUKAwrLFAYUlikMKCxTGFBYpjCgsOzWCq/+OeC4nAf42vH7ww08eKxAoUKFChUqVKhQ4QDX/3j8/fO4rt+tCwEAAAAAAAAAAGCoP/8FMCEuiIXOAAAAAElFTkSuQmCC",
        title: "Nat Geo - New Zealand Skies"
    },
    {
        background: "https://www.cmzoo.org/wp-content/uploads/WH10-2020Pallas-Cat.jpg",
        image: "data:image/png;base64,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",
        title: "WWF - Pallas Cats"
    },
    {
        background: "https://i.ibb.co/Tkk7p3m/dreamers41.jpg",
        image: "https://i.ibb.co/4NKQW16/dreamers42.webp",
        title: "Tinted Dreams Collection"
    },
    {
        background: "https://i.ibb.co/17bYSNR/dreamers51.jpg",
        image: "https://i.ibb.co/y0tQ418/dreamers52.webp",
        title: "Dreamers by Yugal"
    },
    {
        background: "https://i.ibb.co/YZKH1QP/dreamers61.jpg",
        image: "https://i.ibb.co/nwJHpn1/dreamers62.jpg",
        title: "Beauty in Dreamland"
    }
];

const browseData = [
    {
        image: "https://pentagram-production.imgix.net/null0932f6a2-cd89-4e17-9b54-3256a687324a/WWF.jpg?rect=0%2C0%2C900%2C600&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=427",
        title: "WWF"
    },
    {
        image: "https://seekvectorlogo.com/wp-content/uploads/2019/04/british-red-cross-vector-logo.png",
        title: "British Red Cross"
    },
    {
        image: "https://masticasphaltcouncil.co.uk/wp-content/uploads/2018/07/Demelza-Charity-Logo.jpg",
        title: "Demelza"
    },
    {
        image: "https://findlogovector.com/wp-content/uploads/2019/03/british-heart-foundation-logo-vector.png",
        title: "British Heart Foundation"
    },
    {
        image: "https://pixy.org/download/675898/",
        title: "Breast Cancer Research"
    },
    {
        image: "https://i0.wp.com/www.linxyouthproject.co.uk/wp-content/uploads/2020/09/BBC-Children-in-Need-logo.png?ssl=1",
        title: "Children In Need"
    }
]

export {newSlidesData, dreamersData, browseData};