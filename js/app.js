(function() {
    // customers
    let customers = [];
    let index = 0;

    // object custruction

    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    // create custumer function

    function createCustomer(name, img, text) {
        // full img
        let fullImg = `img/customer-${img}.jpg`;

        // create a new customer instance
        const customer = new Customer(name, fullImg, text);
        // add to all customer
        customers.push(customer)
    }

    createCustomer('john', 1, `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum beatae, quae perspiciatis quo sit nostrum laudantium accusamus! Omnis, dolore voluptas! `);
    createCustomer('bob', 2, `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,`);
    createCustomer('peter', 3, `but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example`);
    createCustomer('arnold', 4, `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the  `);

    // console.log(customers);

    document.querySelectorAll('.btn').forEach(function (item)  {
        item.addEventListener('click', function (event) {
            event.preventDefault;

            // console.log(event.target);
            
            if (event.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }
            if (event.target.parentElement.classList.contains('nextBtn')) {
                if (index === (customers.length - 1)) {
                 index = -1;
                }
                index++;
            
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
               }
        })
    })

})()