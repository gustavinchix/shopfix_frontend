const baseAPIUrl = "https://3000-cbe22b94-ffc5-4a04-83d9-27fa41f15bbe.ws-us02.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			categorias: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			fetchCargarCategorias: async () => {
				let response = await fetch(`${baseAPIUrl}/categorias`);
				if (response.ok) {
					let categorias = await response.json();
					setStore({
						categorias: categorias
					});
					console.log(categorias);
					return true;
				} else {
					console.log(`get response failure: ${response.status}`);
					setStore({
						categorias: []
					});
					return false;
				}
			},
			fetchCrearCategoria: async nuevaCategoria => {
				try {
					let response = await fetch(`${baseAPIUrl}/categorias`, {
						method: "POST",
						body: JSON.stringify(nuevaCategoria),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						// hacer fetch! porque se creo una nueva
						// categoria y hay que refrescar la lista
						alert("nueva categoria agregada");
						return getActions().fetchCargarCategorias();
					} else {
						setStore({
							categorias: []
						});
						console.log(`post response failure: ${response.status}`);
						return false;
					}
				} catch (error) {
					console.log(`pasó esto: ${error}`);
					return false;
				}
			},

			fetchEditarCategoria: (categoria, categoria_id) => {
				fetch(`${baseAPIUrl}/categorias/${categoria_id}`, {
					method: "PUT",
					body: JSON.stringify(categoria),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						alert("se ha editado la categoria", JSON.stringify(data));
						getActions().fetchCargarCategorias();
					})
					.catch(error => console.log("Error:", error));
			},

			eliminarCategoria: categoria_id => {
				fetch(`${baseAPIUrl}/categorias/<categoria_id>`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => {
						console.log("delete", data);
						getActions().fetchCargarCategorias();
						alert("categoría eliminada");
					})
					.catch(error => console.error("Error:", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
