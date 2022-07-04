function move(event) {
    var acl = 5
    var k = event.keyCode,
        chrId = document.getElementById('test'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 38) {
                    y -= acl;
                } else if (k == 40) {
                    y += acl;
                }
    
                return y;
            },
    
            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 37) {
                    x -= acl;
                    
                } else if (k == 39) {
                    x += acl;
                }
    
                return x;
            }
        };
    
    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
    }
    
    document.addEventListener('keydown', move);