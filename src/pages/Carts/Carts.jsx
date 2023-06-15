import React, { useEffect } from "react";
import { getAll } from "../../services/methods";
import { endpoints } from "../../services";

function Carts() {
  useEffect(() => {
    getAll(endpoints.carts.getAllCarts).then((res) => {
      console.log(res);
    });
  }, []);

  return <div>Carts</div>;
}

export default Carts;
