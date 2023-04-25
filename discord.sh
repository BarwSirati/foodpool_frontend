#!/bin/bash
discord_url="https://discord.com/api/webhooks/1068873405312532500/Zo0Jpsue_X31iTyep6N_7aAYgkGdrbU4k33witH-p-5MH81kNp8ORELpieQibmcMH84A"

generate_post_data() {
  cat <<EOF
{
  "content": "FoodpoolFrontend Build ✅",
  "embeds": [{
    "title": "Preview [Frontend]",
    "url": "https://foodpool.bxdman.com",
    "color": "655172"
  }]
}
EOF
}


# POST request to Discord Webhook
curl -H "Content-Type: application/json" -X POST -d "$(generate_post_data)" $discord_url
 