
class ProjectServices {
    static async getData(count = 5, filter = "Name", range) {
        let mockData = [
            {
                header: "ASUS ROG 270 React",
                price: 299.43,
                description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
                id: 1000,
                image: "https://loremflickr.com/320/240/tech",
                rate: 4
            },
            {
                header: "BASUS ROG 270 React",
                price: 299.43,
                description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
                id: 1001,
                image: "https://loremflickr.com/320/240/laptop1",
                rate: 4
            },
            {
                header: "VASUS ROG 270 React",
                price: 299.43,
                description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
                id: 1002,
                image: "https://loremflickr.com/320/240/laptop2",
                rate: 3
            },
            {
                header: "BASUS ROG 270 React",
                price: 299.43,
                description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
                id: 1003,
                image: "https://loremflickr.com/320/240/laptop3",
                rate: 1
            },
            {
                header: "CASUS ROG 300 React",
                price: 700,
                description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
                id: 1004,
                image: "https://loremflickr.com/320/240/laptop4",
                rate: 4
            },
            {
                header: "Samsung Laptop G8",
                price: 3000,
                description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
                id: 1005,
                image: "https://loremflickr.com/320/240/laptop5",
                rate: 5
            },
            {
                header: "Samsung Laptop G8",
                price: 3000,
                description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
                id: 1006,
                image: "https://loremflickr.com/320/240/laptop",
                rate: 4
            }

        ]
        console.log(range);
        mockData = mockData.filter((elem, index) => index < count);
        mockData = mockData.filter((elem) => elem.price < range.max && elem.price > range.min);
        console.log(mockData);
        switch (filter) {
            case "Name": mockData.sort((a, b) => {
                const aChar = a.header.toLowerCase();
                const bChar = b.header.toLowerCase();
                if (aChar > bChar) {
                    return 1;
                }
                if (aChar === bChar) {
                    return 0;
                }
                if (aChar < bChar) {
                    return -1;
                }

            }); break;
            case "Price": mockData.sort((a, b) => {
                return a.price - b.price;
            }); break;
            case "Reviews": mockData.sort((a, b) => {
                return a.rate - b.rate;
            }); break;

        }

        return mockData;
    }
}
export default ProjectServices;