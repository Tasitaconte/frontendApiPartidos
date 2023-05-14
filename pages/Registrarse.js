const Registrarse = () => {
return `
<div id="contenedorRegister">
    <div class="row p-5 cardQuery mx-auto ">
        <div class="col-auto card rounded-0 card-body  p-4">
            <div class=" mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" placeholder="name@example.com" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" placeholder="name@example.com" required>
            </div>
        </div>
    </div>
</div>

<style>
    #contenedorRegister {
        background-color: white;
        height: 80vh;
    }

    @media (max-width:100%) or (min-width:800px) {
        .cardQuery {
            width: 50%;
            text-align: justify;
        }
    }

    @media (max-width: 800px) or (min-width:430) {
        .cardQuery {
            width: auto;
            text-align: justify;
        }
    }

    @media (max-width:430px) {
        .cardQuery {
            width: 100%;
            text-align: justify;
        }

        #contenedorRegister {
            background-color: white;
            /* height: 20vh; */
        }
    }
</style>

`
}

export {Registrarse}