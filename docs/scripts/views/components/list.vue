<template>
  <div class="demo--list">
    <section class="hero">
      <ui-list twoLine avatar ripple class="demo-list demo-list--with-avatars">
        <ui-item v-for="(item, index) in folders" :key="index">
          <ui-item-first :icon="item.first"></ui-item-first>
          <ui-item-text>
            {{ item.text }}
            <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
          </ui-item-text>
          <ui-item-last :icon="item.last"></ui-item-last>
        </ui-item>
      </ui-list>
    </section>

    <div id="demo-wrapper">
      <section>
        <h2>Custom Colors</h2>
        <section>
          <h3>Example - Two-Line Lists, Avatars, Metadata, Inset Dividers</h3>
          <ui-list-group class="demo-list-group--custom">
            <ui-list-group-subheader>Folders</ui-list-group-subheader>
            <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--custom demo-list--icon-placeholders">
              <ui-item v-for="(item, index) in folders" :key="index">
                <ui-item-first :icon="item.first"></ui-item-first>
                <ui-item-text>
                  {{ item.text }}
                  <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
                </ui-item-text>
                <ui-item-last :icon="item.last"></ui-item-last>
              </ui-item>
            </ui-list>
            <ui-list-divider inset></ui-list-divider>
            <ui-list-group-subheader>Files</ui-list-group-subheader>
            <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list demo-list demo-list--with-avatars demo-list--custom demo-list--icon-placeholders">
              <ui-item v-for="(item, index) in files" :key="index">
                <ui-item-first :icon="item.first"></ui-item-first>
                <ui-item-text>
                  {{ item.text }}
                  <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
                </ui-item-text>
                <ui-item-last :icon="item.last"></ui-item-last>
              </ui-item>
            </ul>
          </ui-list-group>
        </section>
      </section>


      <section>
        <h2>Single-Line List</h2>
        <section>
          <h3>Text only, non-interactive (no states)</h3>
          <ui-list nonInteractive class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              Single-line item
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Text only (dense)</h3>
          <ui-list dense class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              Single-line item
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Graphic</h3>
          <aside>
            <p>
              <em>Note: The grey background is styled using demo placeholder styles</em>
            </p>
          </aside>
          <ui-list class="demo-list demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              Single-line item
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Graphic (dense)</h3>
          <ui-list dense class="demo-list demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              Single-line item
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Graphic Example - Icon with Text</h3>
          <ui-list class="demo-list">
            <ui-item v-for="(item, index) in items" :key="index">
              <ui-item-first :icon="item.icon"></ui-item-first>
              {{ item.text }}
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Avatar List</h3>
          <ui-list avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              Single-line item
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Avatar List (dense)</h3>
          <ui-list avatar dense class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              Single-line item
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Example - Avatar with Text</h3>
          <ui-list avatar dense class="demo-list demo-list--with-avatars">
            <ui-item v-for="(item, index) in items" :key="index">
              <ui-item-first :image="item.avatar"></ui-item-first>
              {{ item.name }}
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Metadata</h3>
          <ui-list class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              Single-line item
              <ui-item-last>{{ `$${i}0.00` }}</ui-item-last>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Metadata (Dense)</h3>
          <ui-list dense class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              Single-line item
              <ui-item-last>{{ `$${i}0.00` }}</ui-item-last>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Avatar + Metadata</h3>
          <ui-list avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              Single-line item
              <ui-item-last>{{ `$${i}0.00` }}</ui-item-last>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Avatar + Metadata (Dense)</h3>
          <ui-list dense avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              Single-line item
              <ui-item-last>{{ `$${i}0.00` }}</ui-item-last>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Example - Avatar with Text and Icon</h3>
          <ui-list avatar class="demo-list demo-list--with-avatars demo-list--avatar-and-meta-icon">
            <ui-item v-for="(item, index) in items" :key="index">
              <ui-item-first :image="item.avatar"></ui-item-first>
              {{ item.name }}
              <ui-item-last :icon="item.favorite ? 'favorite' : 'favorite_border'"></ui-item-last>
            </ui-item>
          </ui-list>
        </section>
      </section>


      <section>
        <h2>Two-Line List</h2>
        <section>
          <h3>Text-Only</h3>
          <ui-list twoLine class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Text-Only (Dense)</h3>
          <ui-list twoLine dense class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Graphic</h3>
          <ui-list twoLine class="demo-list demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Graphic (Dense)</h3>
          <ui-list twoLine dense class="demo-list demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Avatar List</h3>
          <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Avatar List (dense)</h3>
          <ui-list twoLine dense avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Metadata</h3>
          <ui-list twoLine class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
              <ui-item-last>{{ `$${i}0.00` }}</ui-item-last>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Metadata (Dense)</h3>
          <ui-list twoLine dense class="demo-list">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-text>
                Two-line item
                <ui-item-subtext>Secondary text</ui-item-subtext>
              </ui-item-text>
              <ui-item-last>{{ `$${i}0.00` }}</ui-item-last>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Example - Two-line Avatar + Text + Icon</h3>
          <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="(item, index) in folders" :key="index">
              <ui-item-first :icon="item.first"></ui-item-first>
              <ui-item-text>
                {{ item.text }}
                <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
              </ui-item-text>
              <ui-item-last :icon="item.last"></ui-item-last>
            </ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Lists w/ Ellipsis</h3>
          <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
            <ui-item v-for="(item, index) in folders" :key="index">
              <ui-item-first :icon="item.first"></ui-item-first>
              <ui-item-text>
                {{ item.text }}
                <ui-item-subtext>{{ item.description }}</ui-item-subtext>
              </ui-item-text>
              <ui-item-last :icon="item.last"></ui-item-last>
            </ui-item>
          </ui-list>
        </section>
      </section>


      <section>
        <h2>List Dividers</h2>
        <section>
          <h3>Full-Width Dividers</h3>
          <ui-list class="demo-list">
            <ui-item v-for="i in 3" :key="i">Single-line item - section 1</ui-item>
            <ui-item-divider></ui-item-divider>
            <ui-item v-for="i in 2" :key="i + 3">Single-line item - section 2</ui-item>
          </ui-list>
        </section>

        <section>
          <h3>Inset Dividers</h3>
          <ui-list avatar class="demo-list demo-list--with-avatars demo-list demo-list--icon-placeholders">
            <ui-item v-for="i in 3" :key="i">
              <ui-item-first></ui-item-first>
              Single-line item - section 1
            </ui-item>
            <ui-item-divider inset></ui-item-divider>
            <ui-item v-for="i in 2" :key="i + 3">
              <ui-item-first></ui-item-first>
              Single-line item - section 2
            </ui-item>
          </ui-list>
        </section>
      </section>


      <section>
        <h2>List Groups</h2>
        <section>
          <h3>Basic Usage</h3>
          <ui-list-group>
            <ui-list-group-subheader>List 1</ui-list-group-subheader>
            <ui-list class="demo-list">
              <ui-item v-for="i in 3" :key="i">Single-line item</ui-item>
            </ui-list>
            <ui-list-divider></ui-list-divider>
            <ui-list-group-subheader>List 2</ui-list-group-subheader>
            <ui-list class="demo-list">
              <ui-item v-for="i in 3" :key="i">Single-line item</ui-item>
            </ui-list>
          </ui-list-group>
        </section>

        <section>
          <h3>Example - Two-Line Lists, Avatars, Metadata, Inset Dividers</h3>
          <ui-list-group>
            <ui-list-group-subheader>Folders</ui-list-group-subheader>
            <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
              <ui-item v-for="(item, index) in folders" :key="index">
                <ui-item-first :icon="item.first"></ui-item-first>
                <ui-item-text>
                  {{ item.text }}
                  <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
                </ui-item-text>
                <ui-item-last :icon="item.last"></ui-item-last>
              </ui-item>
            </ui-list>
            <ui-list-divider inset></ui-list-divider>
            <ui-list-group-subheader>Files</ui-list-group-subheader>
            <ui-list twoLine avatar class="demo-list demo-list--with-avatars demo-list--icon-placeholders">
              <ui-item v-for="(item, index) in files" :key="index">
                <ui-item-first :icon="item.first"></ui-item-first>
                <ui-item-text>
                  {{ item.text }}
                  <ui-item-subtext>{{ item.subtext }}</ui-item-subtext>
                </ui-item-text>
                <ui-item-last :icon="item.last"></ui-item-last>
              </ui-item>
            </ui-list>
          </ui-list-group>
        </section>
      </section>


      <section>
        <h2>Interactive Lists (with ink ripple)</h2>
        <section>
          <h3>Example - Interactive List</h3>
          <ui-list-nav class="demo-list">
            <ui-item-link v-for="(item, index) in items" :key="index">
              <ui-item-first :icon="item.icon"></ui-item-first>
              {{ item.text }}
            </ui-item-link>
          </ui-list-nav>
        </section>
      </section>
    </div>

    <!-- <ui-apidoc name="list"></ui-apidoc>
    <ui-apidoc name="item"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      folders: [
        {
          first: 'folder',
          text: 'Photos',
          subtext: 'Jan 9, 2014',
          description: 'This is some secondary text',
          last: 'info'
        },
        {
          first: 'folder',
          text: 'Recipes',
          subtext: 'Jan 9, 2014',
          description: 'This is some secondary text',
          last: 'info'
        },
        {
          first: 'folder',
          text: 'Work',
          subtext: 'Jan 9, 2014',
          description:
            'This is a description of work photos from the years 2018 to present time while I was a barista',
          last: 'info'
        }
      ],
      files: [
        {
          first: 'insert_drive_file',
          text: 'Vacation Itinerary',
          subtext: 'Jan 10, 2014',
          last: 'info'
        },
        {
          first: 'insert_drive_file',
          text: 'Kitchen Remodel',
          subtext: 'Jan 20, 2014',
          last: 'info'
        }
      ],
      items: [
        {
          icon: 'network_wifi',
          text: 'Wi-Fi',
          avatar: require('../../../images/animal1.svg'),
          name: 'Panda',
          favorite: true
        },
        {
          icon: 'bluetooth',
          text: 'Bluetooth',
          avatar: require('../../../images/animal2.svg'),
          name: 'Sleuth',
          favorite: false
        },
        {
          icon: 'data_usage',
          text: 'Data Usage',
          avatar: require('../../../images/animal3.svg'),
          name: 'Brown Bear',
          favorite: false
        }
      ]
    };
  },
  created() {
    // this.showCode('list', 6);
  }
};
</script>