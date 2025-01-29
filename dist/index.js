"use strict";
class CalculadoraFinanciera {
    constructor() {
        this.balance = 0;
        this.movimientosTable = document.querySelector("#movimientos tbody");
        this.balanceInput = document.getElementById("txt_balanceactual");
        console.log("conexion exitosaxd");
        document.getElementById("btn_ingreso").addEventListener("click", () => this.agregarMovimiento("Ingreso"));
        document.getElementById("btn_retiro").addEventListener("click", () => this.agregarMovimiento("Retiro"));
    }
    agregarMovimiento(tipo) {
        const monto = parseFloat(document.getElementById("txt_monto").value);
        const descripcion = document.getElementById("txt_descripcion").value.trim();
        if (isNaN(monto) || monto <= 0 || descripcion === "") {
            alert("Introduce un monto válido y una descripción.");
            return;
        }
        if (tipo === "Retiro" && this.balance < monto) {
            alert("Saldo insuficiente.");
            return;
        }
        this.balance += tipo === "Ingreso" ? monto : -monto;
        this.balanceInput.value = this.balance.toFixed(2);
        const fila = document.createElement("tr");
        fila.className = tipo === "Ingreso" ? "fila-ingreso" : "fila-retiro";
        fila.innerHTML = `<td>${monto.toFixed(2)}</td><td>${descripcion}</td><td>${tipo}</td>`;
        this.movimientosTable.appendChild(fila);
        document.getElementById("txt_monto").value = "";
        document.getElementById("txt_descripcion").value = "";
    }
}
document.addEventListener("DOMContentLoaded", () => new CalculadoraFinanciera());
