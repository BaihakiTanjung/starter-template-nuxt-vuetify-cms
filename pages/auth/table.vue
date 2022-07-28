<template>
  <div>
    <h3>Table</h3>
    <hr class="my-3">
    <BaseCard>
      <BaseTable :items="items" :headers="headers"></BaseTable>
    </BaseCard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{
        nama: "Baihaki Al Biruni",
        alamat: "Jl. Raya Baiturrahman No.1",
        telepon: "0812-3456-7890",
        email: "",
        website: "",
        logo: "",
      }],
      headers: [{
        text: 'Nama',
        value: 'nama',
      },
      {
        text: 'Alamat',
        value: 'alamat',
      },
      {
        text: 'Telepon',
        value: 'telepon',
      },
      {
        text: 'Email',
        value: 'email',
      },
      {
        text: 'Website',
        value: 'website',
      },
      {
        text: 'Logo',
        value: 'logo',
      }],
    }
  },
}
</script>
