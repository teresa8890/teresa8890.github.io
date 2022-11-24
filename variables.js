const inputs = document.querySelectorAll('.control input')
// console.log(inputs);

function handleUpate(){
    const suffix = this.dataset.sizing || '';
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpate));