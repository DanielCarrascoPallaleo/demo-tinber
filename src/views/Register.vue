
<template>
    <div class="flex justify-center h-screen">
        <div class="mx-[41px] flex flex-col items-start w-full mt-[20px] justify-between">
            <div class="w-full">      
                <div class="mb-[21px]">
                    <img src="../assets/arrow-back-fill.svg">
                </div>     
                <div class="mb-[21px]">
                    <h1 class="text-primary text-[25px] font-bold">Registro</h1>
                    <h2 class="text-gray text-[16px]">Introduce tus datos</h2>
                </div>
                <form action="#" method="post" class="w-full h-full">
                    <div class="flex flex-col items-start gap-2 w-full">
                        <label for="email" class="font-bold text-[12px]">Nombre:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="Nombre" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label for="email" class="font-bold text-[12px]">Apellido:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="Apellido" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label for="email" class="font-bold text-[12px]">Rut:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="Ej: 12345678-9" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label for="email" class="font-bold text-[12px]">Fecha de nacimiento:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="dd/mm/aaaa" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label for="email" class="font-bold text-[12px]">Genero:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="Genero" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label for="email" class="font-bold text-[12px]">Correo electrónico:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="Correo electrónico" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label for="email" class="font-bold text-[12px]">Contraseña:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="*********" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full mt-2">
                        <label for="email" class="font-bold text-[12px]">Confirmar contraseña:</label>
                        <input class="border-secondary border-[1px] px-3 w-full h-[58px] rounded-[14px] text-black text-[16px]" type="text" id="email" name="email" 
                            placeholder="*********" required>
                    </div>
                    <div class="flex flex-col items-start gap-2 w-full my-4">
                        <label for="email" class="font-bold text-[10px]">Estoy de acuerdo con las <span class="underline text-primary">politicas de privacidad, terminos y condiciones</span></label>
                    </div>
                    
                </form>
            </div>
            <div class="mb-[74px] w-full">
                <button class="bg-light rounded-[14px] flex items-center justify-center px-4 py-2 h-[58px] w-full text-white font-semibold text-[16px]" type="submit">Registrar</button>
            </div>
        </div>
    </div>
</template>