const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

//初始化狀態
let purchaseRecords = [];   
    /*//{
        // name:name,
        // couse:Number,
        // coursePrice:Number,
        // totalPrice:Number
    }*/

//建立目的
function addPurchaseRecord(name , course)
{
    console.log(typeof name, typeof course);

    if(name != undefined && name != "" || typeof course == Number && course > 0)
    {
        let coursePrice = 0;

        //判斷課程優惠
        if(course <= 10)
        {
            coursePrice = 1500;
        }else if(course <= 20)
        {
            coursePrice = 1300;
        }else
        {
            coursePrice = 1100;
        }

        //計算總價
        const totalPrice = course * coursePrice;

        //存入purchaseRecords
        purchaseRecords.push(
            {
                name:name,
                course:course,
                coursePrice:coursePrice,
                totalPrice:totalPrice
            }
        )
        console.log(`新增購買記錄成功！會員 ${name} 購買 ${course} 堂課，總金額為 ${totalPrice} 元。`);

    }
    else
    {
        console.log("輸入錯誤，請輸入有料會員資料與堂數");
    }
}

addPurchaseRecord("Alice", 4); 
addPurchaseRecord("Bob", 12); 
addPurchaseRecord("Charlie", 25); 
addPurchaseRecord("Hannah", 50);
// addPurchaseRecord("", 50);   
console.log(purchaseRecords);


function calculateTotalPrice()
{
    let saleeTotal = 0;

    purchaseRecords.forEach(function(item){
        saleeTotal += item.totalPrice;
    })
    console.log(`目前總營業額為 ${saleeTotal} 元`);
}
calculateTotalPrice();


function filterNoPurchaseMember()
{
    const purchaseMemberNames = [];
    purchaseRecords.forEach(function(record){
        purchaseMemberNames.push(record.name);
    })

    const noPurchaseMember = members.filter(function(member){
        return purchaseMemberNames.includes(member) === false;
    })

    console.log(`未購買課程的會員有：${noPurchaseMember}`)
}
filterNoPurchaseMember();