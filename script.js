var coin = {
    state: 0,
    flip: function() {
        // randomly set this.state to be either 0 or 1
        this.state =Math.round(Math.random())
    },
    toString: function() {
        // return “H” or “T” depending on whether this.state is 0 or 1
        return this.state === 1 ?  'T' : 'H'
    },
    toHTML: function() {
        var img = document.createElement("img");
        if (this.state === 0)  img.src = 'https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu'
        else if(this.state === 1) img.src = 'https://images-na.ssl-images-amazon.com/images/I/5193u5hhiZL._UY395_.jpg'
        return img;
    }
};



for (let i= 1; i<= 20; i++){
  coin.flip();
  let h3 = document.createElement('h3')
  h3.textContent = coin.toString()
  document.body.appendChild(h3)
  document.body.appendChild(coin.toHTML())
}