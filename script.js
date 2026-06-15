document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("search");
    const danTocLinks = document.querySelectorAll("#danTocList a");

    if (!search || danTocLinks.length === 0) return;

    function removeVietnameseTones(str) {
        return str.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .toLowerCase()
            .trim();
    }

    search.addEventListener("keydown", function (event) {
        if (event.key !== "Enter") return;

        const keyword = removeVietnameseTones(search.value);
        if (!keyword) return;

        let matchedHref = null;

        danTocLinks.forEach((link) => {
            const text = removeVietnameseTones(link.textContent);
            const href = link.getAttribute("href");

            if (text.includes(keyword) || keyword.includes(text.replace("dan toc ", ""))) {
                matchedHref = href;
            }
        });

        if (matchedHref) {
            window.location.href = matchedHref;
        } else {
            alert(`Không tìm thấy dân tộc "${search.value}".`);
        }
    });
});
function openImage(src){

    document.getElementById("imageModal").style.display="flex";

    document.getElementById("modalImg").src=src;
}

function closeImage(){

    document.getElementById("imageModal").style.display="none";
}
const searchInput = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

const data = [

    {
        name: "Dân tộc Kinh",
        link: "kinh.html"
    },
     {
        name: "Dân tộc Tày",
        link: "tay.html"
    },

    {
        name: "Dân tộc Thái",
        link: "thai.html"
    },

    {
        name: "Dân tộc Mường",
        link: "muong.html"
    },

    {
        name: "Dân tộc Hoa",
        link: "hoa.html"
    },
    
    {
        name: "Dân tộc Khmer",
        link: "khmer.html"
    },
    
    {
        name: "Dân tộc Nùng",
        link: "nung.html"
    },
    
    {
        name: "Dân tộc HMông",
        link: "hmong.html"
    },
    
    {
        name: "Dân tộc Dao",
        link: "dao.html"
    },
    
    {
        name: "Dân tộc Gia-rai",
        link: "giarai.html"
    },
    
    {
        name: "Dân tộc Ê đê",
        link: "ede.html"
    },
    
    {
        name: "Dân tộc Ba-na",
        link: "bana.html"
    },
    
    {
        name: "Dân tộc Sán Chay",
        link: "sanchay.html"
    },
    
    {
        name: "Dân tộc Chăm",
        link: "cham.html"
    },
    
    {
        name: "Dân tộc Sơ-đăng",
        link: "sodang.html"
    },
    
    {
        name: "Dân tộc Sán Dìu",
        link: "sandiu.html"
    },
    
    {
        name: "Dân tộc Hrê",
        link: "hre.html"
    },
    
    {
        name: "Dân tộc Cơ ho",
        link: "coho.html"
    },
    
    {
        name: "Dân tộc Ra-glai",
        link: "raglai.html"
    },
    
    {
        name: "Dân tộc Mnông",
        link: "mnong.html"
    },
    
    {
        name: "Dân tộc Thổ",
        link: "tho.html"
    },
    
    {
        name: "Dân tộc Xtiêng",
        link: "xtieng.html"
    },
    
    {
        name: "Dân tộc Khơ mú",
        link: "khomu.html"
    },
    
    {
        name: "Dân tộc Bru-Vân Kiều",
        link: "bru.html"
    },
    
    {
        name: "Dân tộc Giáy",
        link: "giay.html"
    },
    
    {
        name: "Dân tộc Cơ-tu",
        link: "cotu.html"
    },
    
    {
        name: "Dân tộc Gié-Triêng",
        link: "gie.html"
    },
    
    {
        name: "Dân tộc Ta-ôi",
        link: "taoi.html"
    },
    
    {
        name: "Dân tộc Mạ",
        link: "ma.html"
    },
    
    {
        name: "Dân tộc Co",
        link: "co.html"
    },
    
    {
        name: "Dân tộc Chơ-ro",
        link: "choro.html"
    },
    
    {
        name: "Dân tộc Hà Nhì",
        link: "hanhi.html"
    },
    
    {
        name: "Dân tộc Xinh-mun",
        link: "xinhmun.html"
    },
    
    {
        name: "Dân tộc Chu-ru",
        link: "churu.html"
    },
    
    {
        name: "Dân tộc Lào",
        link: "lao.html"
    },
    
    {
        name: "Dân tộc La-chí",
        link: "lachi.html"
    },
    
    {
        name: "Dân tộc Phù Lá",
        link: "phula.html"
    },
    
    {
        name: "Dân tộc La Hủ",
        link: "lahu.html"
    },
    
    {
        name: "Dân tộc Kháng",
        link: "khang.html"
    },
    
    {
        name: "Dân tộc Lự",
        link: "lu.html"
    },
    
    {
        name: "Dân tộc Pà Thẻn",
        link: "pathen.html"
    },
    
    {
        name: "Dân tộc Lô Lô",
        link: "lolo.html"
    },
    
    {
        name: "Dân tộc Chứt",
        link: "chut.html"
    },
    
    {
        name: "Dân tộc Mảng",
        link: "mang.html"
    },
    
    {
        name: "Dân tộc Cờ Lao",
        link: "colao.html"
    },
    
    {
        name: "Dân tộc Bố Y",
        link: "boy.html"
    },
    
    {
        name: "Dân tộc La Ha",
        link: "laha.html"
    },
    
    {
        name: "Dân tộc Cống",
        link: "cong.html"
    },

     {
        name: "Dân tộc Ngái",
        link: "ngai.html"
    }, 
    
    {
        name: "Dân tộc Si La",
        link: "sila.html"
    }, 
    
    {
        name: "Dân tộc Pu Péo",
        link: "pupeo.html"
    }, 
    
    {
        name: "Dân tộc Brâu",
        link: "brau.html"
    }, 
    
    {
        name: "Dân tộc Rơ-măm",
        link: "romam.html"
    }, 
    
    {
        name: "Dân tộc Ơ-đu",
        link: "odu.html"
    },

    {
        name: "Trang phục",
        link: "#trangphuc"
    },

    {
        name: "Lễ hội",
        link: "#lehoi"
    },

    {
        name: "Ẩm thực",
        link: "#amthuc"
    },

    {
        name: "Thư viện",
        link: "#thuvien"
    }

];

searchInput.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    suggestions.innerHTML = "";

    if(value === ""){

        suggestions.style.display = "none";

        return;
    }

    let result = data.filter(item =>
        item.name.toLowerCase().includes(value)
    );

    result.forEach(item => {

        let div = document.createElement("div");

        div.classList.add("suggestion-item");

        div.innerText = item.name;

        div.onclick = () => {

            window.location.href = item.link;
        };

        suggestions.appendChild(div);
    });

    suggestions.style.display =
        result.length ? "block" : "none";
});
