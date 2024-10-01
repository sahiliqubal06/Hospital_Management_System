import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          tenetur fugit mollitia rerum deleniti excepturi porro, ut placeat
          dolore, fuga quia a, provident reprehenderit repudiandae quidem magni
          iure ad possimus dolores nesciunt vitae commodi. Veritatis quam illo,
          laborum, dolore saepe dolores modi alias laudantium, delectus eveniet
          omnis quod. Odit, eaque?
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quidem sequi, suscipit facilis nostrum iure mollitia blanditiis
          commodi incidunt ut dicta, quae quas nihil sed quam saepe possimus
          natus cupiditate eveniet. Magni pariatur vero doloribus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          nisi molestias soluta!
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
