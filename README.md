<h1 align="center">🖥️ ManDows 98 <sup>[WIP]</sup></h1>

<p align="center">
  <i>An "operating system" that should never have been turned on.</i><br/>
  <sub>⚠️ This project is a <b>Work In Progress</b>. Things are incomplete, broken, or unfinished. That's the point (sort of).</sub>
</p>

---

## 💾 What is this?

**ManDows 98** is a Windows 98 simulator/parody — except *everything* is modified.
You boot up, explore, solve puzzles, browse the (somewhat broken) internet, and try to survive an antivirus that clearly has ulterior motives.

> ⚠️ No real PC was harmed. The jumpscare is silent. Probably.

> 🚧 **This project is incomplete.** If you find bugs, have ideas, or want to contribute, feel free to open an issue or reach out!

---

## 🎮 How the gameplay works

| Step | What happens |
|------|--------------|
| 1️⃣ | You **boot** into ManDows 98 and access the start menu (options, credits, about the creator, etc.) |
| 2️⃣ | You enter the desktop and open the **BakExplorer** browser |
| 3️⃣ | You find and try to install **Antivarios** (a KinitoPet-style assistant) |
| 4️⃣ | Error. You must find the password in `Documents > error.txt`, decode the binary using the terminal documentation found in BakExplorer, and unlock the app |
| 5️⃣ | You open Antivarios → a **mandatory ManDows update** pops up |
| 6️⃣ | You update, try again → **another error**. This time the solution is in the **Minocroft Store** |
| 7️⃣ | You download **AppUnlocker** and bypass what *FireInTheRoleSecurity* blocked |
| 8️⃣ | You finally open Antivarios → a small walking mini-game → **jumpscare** → virus scan → a little game Antivarios made just for you |
| 9️⃣ | THE END *(for now)* 👀 |

---

## 📂 Quick structure (what you'll find)

- **BakExplorer** — ManDows' browser/file manager
- **Antivarios** — the "protagonist" assistant
- **Minocroft Store** — the app store (pretty empty for now)
- **AppUnlocker** — utility to bypass FireInTheRoleSecurity
- **Terminal** — documentation accessible through BakExplorer

---

## 🛠️ Status & Version

| Field | Info |
|-------|------|
| **Current version** | `1.0.5b` *(b = beta)* |
| **Status** | Work In Progress (WIP) |
| **Platform** | *(add here: Windows / Web / etc.)* |

---

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes bundled with Node.js)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/macieal/ManDows98

# Enter the project folder
cd ManDows98

# Install dependencies
npm install

# Run the game
npm start