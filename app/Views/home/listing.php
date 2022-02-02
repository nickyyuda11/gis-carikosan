<main>
    <div class="container-fluid full-height">
        <div class="row row-height">
            <div class="col-lg-5 content-left order-md-last order-sm-last order-last">
                <div id="results_map_view">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-10">
                                <!-- <h4 id="kec" data-kec=""><strong></strong> result for All listing</h4> -->
                                <h4 id="kec" data-kec=""><strong><?= $jumlahlistKos ?></strong> result for All listing</h4>
                            </div>
                            <div class="col-2">
                                <a href="#0" class="search_mob btn_search_mobile map_view"></a> <!-- /open search panel -->

                            </div>
                        </div>
                        <!-- /row -->
                        <div class="search_mob_wp">
                            <div class="custom-search-input-2 map_view">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="What are you looking for...">
                                    <i class="icon_search"></i>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Where">
                                    <i class="icon_pin_alt"></i>
                                </div>
                                <select class="wide">
                                    <option>All Categories</option>
                                    <option>Shops</option>
                                    <option>Hotels</option>
                                    <option>Restaurants</option>
                                    <option>Bars</option>
                                    <option>Events</option>
                                    <option>Fitness</option>
                                </select>
                                <input type="submit" value="Search">
                            </div>
                        </div>
                        <!-- /search_mobile -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /results -->

                <div class="filters_listing version_3">
                    <div class="container-fluid">
                        <ul class="clearfix">
                            <li>
                                <div class="switch-field">
                                    <input type="radio" id="all" name="listing_filter" value="all" checked>
                                    <label for="all">All</label>
                                    <input type="radio" id="popular" name="listing_filter" value="popular">
                                    <label for="popular">Popular</label>
                                    <input type="radio" id="latest" name="listing_filter" value="latest">
                                    <label for="latest">Latest</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- /container -->
                </div>

                <?php foreach ($kos as $dataKos) {
                    echo '
                    <div class="strip map_view add_top_20">
                    <div class="row no-gutters">
                        <div class="col-4">
                            <figure>
                                <a href="detail-restaurant.html"><img src="/img/' . $dataKos['foto_kos']['NAMA_FOTO'] . '" class="img-fluid" alt=""></a>
                                <small>' . $dataKos['kategori_kos'] . '</small>
                            </figure>
                        </div>
                        <div class="col-8">
                            <div class="wrapper">
                                <a href="#0" class="wish_bt"></a>
                                <h3><a href="detail-restaurant.html">' . $dataKos['nama_kos'] . '</a></h3>
                                <small>Rp ' . $dataKos['harga_kos']['HARGA_SEWAKOS'] . '</small>
                            </div>
                            <ul>
                                <li><span class="loc_open">' . $dataKos['sisa_kos'] . '</span></li>
                                <li>
                                    <div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                ';
                } ?>
                <!-- /strip map_view -->
                <div id="loadMoreBlock"></div>

                <p class="text-center add_top_30" id="pesan"></p>
                <p class="text-center add_top_30" id="loadMoreButtonBlock"><a href="#0" class="btn_1 rounded" id="loadMoreButtonBlock"><strong>Load more</strong></a></p>
            </div>
            <!-- /content-left-->

            <div class="col-lg-7 map-right">
                <div id="map_right_listing"></div>
                <!-- map-->
            </div>
            <!-- /map-right-->
        </div>
        <!-- /row-->
    </div>
    <!-- /container-fluid -->
</main>
<!--/main-->
</div>
<!-- page -->

<!-- Sign In Popup -->
<div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
    <div class="small-dialog-header">
        <h3>Sign In</h3>
    </div>
    <form>
        <div class="sign-in-wrapper">
            <a href="#0" class="social_bt facebook">Login with Facebook</a>
            <a href="#0" class="social_bt google">Login with Google</a>
            <div class="divider"><span>Or</span></div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" id="email">
                <i class="icon_mail_alt"></i>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" id="password" value="">
                <i class="icon_lock_alt"></i>
            </div>
            <div class="clearfix add_bottom_15">
                <div class="checkboxes float-left">
                    <label class="container_check">Remember me
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
            </div>
            <div class="text-center"><input type="submit" value="Log In" class="btn_1 full-width"></div>
            <div class="text-center">
                Don’t have an account? <a href="register.html">Sign up</a>
            </div>
            <div id="forgot_pw">
                <div class="form-group">
                    <label>Please confirm login email below</label>
                    <input type="email" class="form-control" name="email_forgot" id="email_forgot">
                    <i class="icon_mail_alt"></i>
                </div>
                <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"></div>
            </div>
        </div>
    </form>
    <!--form -->
</div>
<!-- /Sign In Popup -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initialize"></script>

<script>
    var locations = JSON.parse(<?= json_encode($kos) ?>)
    var page = 1;
    var triggerScrollLoader = true;
    var isLoading = false;
</script>