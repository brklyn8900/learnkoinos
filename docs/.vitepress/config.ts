import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn Koinos",
  description: "Build on the worlds first free-to-use blockchain, Koinos.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Support This Project", link: "/support" },
      { text: "Blog", link: "/articles/" },
    ],

    sidebar: [
      {
        text: "KOINOS BLOCKCHAIN",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/M0/koinos_introduction.md" },
          { text: "Terminology", link: "/M0/koinos_terminology.md" },
          { text: "Koinos Nodes", link: "/M0/koinos_nodes.md" },
          { text: "Proof of Burn", link: "/M0/koinos_pob.md" },
          { text: "Calculating Block Reward", link: "/M0/koinos_block-reward.md" },
          { text: "Using the Faucet", link: "/M0/using-the-faucet.md" },
        ],
      },
      {
        text: "MODULE 1: THE KOINOS-CLI",
        collapsed: true,
        items: [
          { text: "1. Introduction", link: "/M1/1_introduction.md" },
          { text: "2. Installation", link: "/M1/2_installation.md" },
          { text: "3. Generating a New Wallet", link: "/M1/3_new-wallet.md" },
          { text: "4. Sending a token", link: "/M1/4_send-token.md" },
          { text: "5. Interacting with Smart Contracts", link: "/M1/5_interacting.md",
          },
          { text: "6. Setting RC Limits", link: "/M1/6_set-rclimit.md" },
        ],
      },
      {
        text: "MODULE 2: MANA & RC LIMITS",
        collapsed: true,
        items: [
          { text: "1. Introduction", link: "/M2/1_introduction.md" },
          { text: "2. What is Mana?", link: "/M2/2_what-is-mana.md" },
          { text: "3. Hold $KOIN get Mana", link: "/M2/3_hold_koin_get_mana.md" },
          { text: "4. Mana Sharing ", link: "/M2/4_mana-sharing.md" },
          { text: "5. Recharging Mana (free)", link: "/M2/5_recharge.md" },
          { text: "6. The Intuitive Value of Mana ", link: "/M2/6_price-of-mana.md" },
          { text: "7. RC Limits", link: "/M2/7_rclimit.md" },
        ],
      },
      {
        text: "MODULE 3: LAUNCHING A KOINOS MINING NODE",
        collapsed: true,
        items: [
          {
            text: "1. Introduction Koinos Mining", link: "/M3/1_introduction.md"
          },
          { text: "2. Downloading the Node", link: "/M3/2_download-node.md" },
          { text: "3. Inital Setup ", link: "/M3/3_init-setup.md" },
          { text: "4. Starting & Syncing", link: "/M3/4_sync.md" },
          { text: "5. Block_producer Configuration", link: "/M3/5_config.md" },
          { text: "6. Maintenance", link: "/M3/6_maintenance.md" },
        ],
      },
      {
        text: "MODULE 4: YOUR FIRST CONTRACT WITH koinos-sdk-as-cli",
        collapsed: true,
        items: [
          { text: "1. Introduction", link: "/M4/1_introduction.md" },
          { text: "2. Installing the SDK", link: "/M4/2_installing_the_sdk.md" },
          { text: "3. The Hello World Project ", link: "/M4/3_hello-world.md" },
          { text: "4. SDK Folder Structuret", link: "/M4/4_sdk_folder_structure.md" },
          { text: "5. Compile Your Contract", link: "/M4/5_compile_your_contract.md" },
          { text: "6. Generating a Wallet", link: "/M4/6_generate-wallet.md" },
          { text: "7. Upload Your Smart Contract via Koinos-CLI", link: "/M4/7_upload-contract.md" },
          { text: "8. Interacting with myawesomecontract", link: "/M4/8_interacting.md" },
        ],
      },
      {
        text: "MODULE 5: LAUNCHING A KOINOS NFT PROJECT WITH koinos-sdk-as-cli",
        collapsed: true,
        items: [
          { text: "1. Introduction", link: "/M5/1_introduction.md" },
          { text: "2. Clone The Repo", link: "/M5/2_init-setup.md" },
          { text: "3. Customize The Contract", link: "/M5/3_modify.md" },
          { text: "4. Compile and Build", link: "/M5/4_compile.md" },
          { text: "5. Mint a collection", link: "/M5/5_mint.md" },
        ],
      },
      {
        text: "MODULE 6: LAUNCH A TOKEN WITH THE koinos-sdk-as-cli",
        collapsed: true,
        items: [
          { text: "1. Introduction", link: "/M6/1_introduction.md" },
          { text: "2. Clone the Starter Contract", link: "/M6/2_init-setup.md" },
          { text: "3. Modify The Contract", link: "/M6/3_modify.md" },
          { text: "4. Compile and Deploy", link: "/M6/4_compile.md" },
          { text: "5. Mint", link: "/M6/5_mint.md" },
        ],
      },
      {
        text: "MODULE 7: MANAGING STORAGE SPACE ON CHAIN",
        collapsed: true,
        items: [
          { text: "1. Introduction", link: "/M7/1_introduction.md" },
          { text: "2. Setting up our Database", link: "/M7/2_setup.md" },
        ],
      },
      {
        text: "MODULE 8: LAUNCH A DAPP IN 7 DAYS",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/M8/1_introduction.md" },
          { text: "Plan", link: "/M8/2_planning.md" },
          { text: "Architect", link: "/M8/3_architecture.md" },
          { text: "Build Front End Part 1", link: "/M8/4.1_building_frontend.md" },
          { text: "Build Front End Part 2", link: "/M8/4.2_building_frontend.md" },
          { text: "Build Backend", link: "/M8/5_building_backend.md" },
          { text: "Build Smart Contracts: Gamestats Part 1", link: "/M8/6.1_building_smartcontract.md" },
          { text: "Build Smart Contracts: Gamestats Part 2", link: "/M8/6.2_building_smartcontract.md" },
          { text: "Build Smart Contracts: Gamestats Part 3", link: "/M8/6.3_building_smartcontract.md" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/koinos" }],
  },
});
