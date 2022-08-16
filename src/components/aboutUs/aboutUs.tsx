import React from 'react'
import { NavLink } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <div className="wrapper about-wrapper">
      <h2 className="about-title">PostGram</h2>
      <img className="about-image" src='/people.png' alt=""></img>
      <p className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia ducimus impedit consequatur provident, sit enim, voluptas adipisci amet, quisquam architecto molestiae ipsam consectetur suscipit fugit beatae facilis vitae! Exercitationem!
      Culpa cumque doloribus reiciendis aliquid, at, tenetur voluptate tempore, incidunt esse aspernatur obcaecati?
      </p>
      <p>
        Porro quos excepturi provident quasi temporibus ab nostrum impedit unde, itaque cumque, facere inventore magnam quas maiores!
      </p>
      <p>
        Aut omnis exercitationem qui doloribus laborum, mollitia temporibus, vel nisi suscipit fuga non iusto, reprehenderit reiciendis accusantium aliquam? Temporibus, dolores hic. Accusantium blanditiis provident vel ratione delectus laborum? Minima, optio.
      Vitae perspiciatis, labore nostrum totam error repellendus quo odio earum, voluptatem, voluptates ab.
      </p> 
      <p>
        Libero ex nisi nostrum praesentium, atque numquam, et eius possimus labore non voluptate tempora. Quam, quo illum.</p>
      <p>
        Vero, asperiores reprehenderit! Quae ipsa dolorem, nulla facere accusantium eaque assumenda, doloribus nam a nobis, numquam inventore quisquam animi. Aut tempore iure officia illum explicabo blanditiis atque excepturi saepe corporis!
      Eius voluptatum porro quidem tenetur possimus, necessitatibus doloribus ipsum ab libero temporibus dignissimos nisi, accusamus debitis iure nulla excepturi fuga nobis.
      </p>
      <p>
        ligendi sapiente facilis id inventore optio dolorum error veniam sunt sint, reprehenderit necessitatibus cum voluptate, aut quisquam consequatur! Eum molestiae odit laudantium autem nulla tenetur voluptatum assumenda aspernatur illum id?
      Itaque, facilis.
      </p>
      <p>
        Aliquid delectus odit nobis? Hic eum mollitia non, dolores odit molestias possimus totam consectetur ullam error accusantium perferendis, doloremque ratione quia ducimus recusandae facere id fuga, et laboriosam.
      </p>
      <NavLink to="/" className="about-link">Sign up</NavLink>
    </div>
  )
}
