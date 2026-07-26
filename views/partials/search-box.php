<section class="search-section">

    <div class="container">

        <form
            action="/views/search.php"
            method="GET"
            class="search-box"
        >

            <div class="search-grid">

                <div class="form-group">

                    <label>
                        Kata Kunci
                    </label>

                    <input
                        type="text"
                        name="keyword"
                        placeholder="Rumah, Apartemen, Ruko, Villa..."
                    >

                </div>

                <div class="form-group">

                    <label>
                        Tujuan
                    </label>

                    <select name="transaction">

                        <option value="">
                            Semua
                        </option>

                        <option value="jual">
                            Dijual
                        </option>

                        <option value="sewa">
                            Disewakan
                        </option>

                    </select>

                </div>

                <div class="form-group">

                    <label>
                        Jenis Properti
                    </label>

                    <select name="property_type">

                        <option value="">
                            Semua Properti
                        </option>

                        <option>
                            Rumah
                        </option>

                        <option>
                            Apartemen
                        </option>

                        <option>
                            Tanah
                        </option>

                        <option>
                            Ruko
                        </option>

                        <option>
                            Gudang
                        </option>

                        <option>
                            Pabrik
                        </option>

                        <option>
                            Kantor
                        </option>

                        <option>
                            Villa
                        </option>

                        <option>
                            Hotel
                        </option>

                    </select>

                </div>

                <div class="form-group">

                    <label>
                        Provinsi
                    </label>

                    <select
                        id="province"
                        name="province"
                    >

                        <option value="">
                            Semua Provinsi
                        </option>

                    </select>

                </div>

                <div class="form-group">

                    <label>
                        Kota / Kabupaten
                    </label>

                    <select
                        id="city"
                        name="city"
                    >

                        <option value="">
                            Semua Kota
                        </option>

                    </select>

                </div>

                <div class="form-group">

                    <label>
                        Harga Maksimal
                    </label>

                    <select name="max_price">

                        <option value="">
                            Bebas
                        </option>

                        <option value="500000000">
                            ≤ Rp500 Juta
                        </option>

                        <option value="1000000000">
                            ≤ Rp1 Miliar
                        </option>

                        <option value="2000000000">
                            ≤ Rp2 Miliar
                        </option>

                        <option value="5000000000">
                            ≤ Rp5 Miliar
                        </option>

                        <option value="10000000000">
                            > Rp5 Miliar
                        </option>

                    </select>

                </div>

            </div>

            <div class="search-action">

                <button
                    type="submit"
                    class="btn-search"
                >

                    🔍 Cari Properti

                </button>

            </div>

        </form>

    </div>

</section>
