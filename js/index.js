var menu = [
  {
    id: 1,
    name: "ผัดกะเพรา",
    price: 10,
    img: "https://img.wongnai.com/p/1920x0/2020/09/01/67ba09fcb72845bc81fd413036e3f4eb.jpg",
  },
  {
    id: 2,
    name: "ไข่ดาว",
    price: 15,
    img: "https://library.the1.co.th/content/dam/the1/articles/image/2021-09/07-09-2021-018-3.jpg",
  },
  {
    id: 3,
    name: "หมูกรอบ",
    price: 20,
    img: "https://i.ytimg.com/vi/-YHfevW2sOc/maxresdefault.jpg",
  },
  {
    id: 4,
    name: "ผัดคะน้า",
    price: 25,
    img: "https://images.aws.nestle.recipes/resized/eb537463384803a234a43d2a8580ad35_%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B9%8C_944_531.jpg",
  },
  {
    id: 5,
    name: "ผัดพริกแกง",
    price: 30,
    img: "https://img-global.cpcdn.com/recipes/329c9e901543a1c3/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%9C%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%81%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AB%E0%B8%A1.jpg",
  },
  {
    id: 6,
    name: "น้ำตกหมู",
    price: 35,
    img: "https://www.cpbrandsite.com/contents/recipe/co9x24meiluqzeqrtilyeckru13jw0tpgsvveaqz.jpg",
  },
];

console.log(menu);

// Start :: วน loop สินค้า
var html = "";
for (let i = 0; i < menu.length; i++) {
  html += `
    <div onclick="func_seleteproduct(${menu[i]["id"]} , '${menu[i]["name"]}' , ${menu[i]["price"]})" class="product-items">
            <img src="${menu[i]["img"]}"
                alt="">
            <div class="product-info">
                <h3>${menu[i]["name"]}</h3>
                <p>ราคา ${menu[i]["price"]} บาท</p>
            </div>
        </div>
    `;

  $("#product").html(html);
}
// End :: วน loop สินค้า

var list = [];
function func_seleteproduct(menu_id, menu_name, menu_price) {
  console.log(menu_id, menu_name, menu_price);
  var pass = true;

  for (let i = 0; i < list.length; i++) {
    if (list[i]["id"] == menu_id) {
      list[i].count++;
      pass = false;
    }
  }

  if (pass) {
    list.push({
      id: menu_id,
      menu: menu_name,
      price: menu_price,
      count: 1,
    });
  }

  console.log("list : ", list);

  var html = "";
  var sumprice = 0;
  for (let i = 0; i < list.length; i++) {
    sumprice += list[i]["price"] * list[i].count;
    html += `
        <div class="list-items">
                <p>[x ${list[i].count}] ${list[i]["menu"]}</p>
                <p>${numberWithCommas(list[i]["price"] * list[i].count)}  THB</p>
                <button class="decrement_item_btn" onclick="func_decrement_item(${menu[i]["id"]} ,'${menu[i]["name"]}', ${list[i].count})">ลบ</button>
        </div>
        `;
  }
  html += `
    <div class="list-items list-summary">
        <p>รวมราคา</p>
        <p>${numberWithCommas(sumprice)} THB</p>
    </div>
  `;
  $("#list-box").html(html);

}

// Stat :: ลบจำนวนรายการสินค้า
function func_decrement_item(menu_id ,menu_name, menu_count){
  item_id = menu_id
  item_name = menu_name
  item_count = menu_count

  decrement_item = menu_count-1


}
// End :: ลบจำนวนรายการสินค้า






















// Start :: ล้างรายการสินค้า
function func_clearlist() {
  list = [];
  $("#list-box").html(`<p>โปรดเลือกรายการ</p>`);
}
// End :: ล้างรายการสินค้า

// Start :: ฟังก์ชัน คอมมา หลักพัน
function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}
// End :: ฟังก์ชัน คอมมา หลักพัน

// Start :: ฟังก์ชัน ปริ้นรายการ
function func_print_list() {
  console.log("list", list);
  var gotolist = JSON.stringify(list);
  console.log("gotolist", gotolist);
  localStorage.setItem("menulist", gotolist);
  window.location.href = "slip.html";
}
// End :: ฟังก์ชัน ปริ้นรายการ
