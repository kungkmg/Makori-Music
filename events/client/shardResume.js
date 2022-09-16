const { white, yellow, green } = require("chalk");
const os = require("os");
const cpuStat = require("cpu-stat");

module.exports = async (client, id) => {
    console.log(white('[') + yellow('WARN') + white('] ') + yellow('Shard ') + white(id) + yellow(' Shard Resumed!'));
    // info Server Load
    const cpus = os.cpus();
    const cpu = cpus[0];
    const total = Object.values(cpu.times).reduce(
     (acc, tv) => acc + tv, 0
     );
    const usage = process.cpuUsage();
    const currentCPUUsage = (usage.user + usage.system) * 1000;
    const perc = currentCPUUsage / total * 100;
    const cpuCount = os.cpus().length
    const uptime = os.uptime()
    console.log(white('[') + green('Server CPU Name') + white('] ') + white(`Cpu = ${os.cpus().map((i) => `${i.model}`)[0]}`));
    console.log(white('[') + green('Server CPU Core') + white('] ') + white(`Count = ${cpuCount}`));
    console.log(white('[') + green('Server CPU Load') + white('] ') + white(`Server CPU Load = ${perc.toFixed(0) / 100}%`));
    console.log(white('[') + green('Server Ram Load') + white('] ') + white(`Start load mem = ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB`));
    console.log(white('[') + green('Server Ram Free') + white('] ') + white(`Server Free mem = ${(os.freemem() / 1024 / 1024).toFixed(2)}MB`));
}
