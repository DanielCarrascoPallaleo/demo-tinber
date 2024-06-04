
<template>
    <div class="flex justify-center h-screen">
        <div class="mx-[41px] flex flex-col items-start w-full mt-[20px] justify-between">
            <div class="w-full">           
                <div class="mb-[21px]">
                    <img src="../assets/arrow-back-fill.svg">
                </div>    
                <div class="mb-[68px]">
                    <h1 class="text-primary text-[25px] font-bold">Inicio de sesión</h1>
                    <h2 class="text-gray text-[16px]">¡Qué estupendo tenerte de vuelta!</h2>
                </div>
                <form action="#" method="post" class="w-full h-full">
                    <div class="flex flex-col items-start gap-2 w-full">
                        <label for="email" class="font-bold text-[12px]">Correo electrónico:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" placeholder="Correo electrónico" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label class="font-bold text-[12px]" for="password">Contraseña:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="password" id="password" name="password" placeholder="************" required>
                    </div>
                    
                </form>
            </div>
            <div class="mb-[74px] w-full">
                <button class="bg-light rounded-[14px] flex items-center justify-center px-4 py-2 h-[58px] w-full text-white font-semibold text-[16px]" type="submit">Iniciar sesión</button>
                <p class="text-primary text-center mt-2">¿Has olvidado tu contraseña?</p> 
            </div>
        </div>
    </div>
</template>