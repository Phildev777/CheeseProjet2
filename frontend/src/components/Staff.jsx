import React from "react";
import DataHome from "./DataHome";
import DataHomeBase from "./DataHomeBase";

function Staff() {
  return (
    <div>
      {DataHome.map((character) => (
        <DataHomeBase
          image={character.image}
          name={character.name}
          description={character.description}
        />
      ))}
    </div>
  );
}

export default Staff;
